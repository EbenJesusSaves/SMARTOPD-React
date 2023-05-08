import { useState } from "react";

import countries from "i18n-iso-countries";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

export function SelectCountry() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  return (
    <div>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        style={{ width: "150px" }}
        value={selectedCountry}
        onChange={(e) => selectCountryHandler(e.target.value)}
      >
        <option selected>Choose a country</option>
        {!!countryArr?.length &&
          countryArr.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </select>
    </div>
  );
}
