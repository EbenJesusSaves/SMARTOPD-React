import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const SuccessPopUp = (title, text) => {
  console.log(text, title);
  MySwal.fire({
    title: title,
    text: text,
    icon: "success",
    confirmButtonColor: "#30D158",
  });
};
