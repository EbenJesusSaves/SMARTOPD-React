import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const SuccessPopUp = (title, text, icon) => {
  console.log(icon);
  MySwal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: "#30D158",
  });
};
