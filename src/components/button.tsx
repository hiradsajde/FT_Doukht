import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BarLoader } from "react-spinners";
interface ButtonProps {
  mode?: string;
  text?: string;
  slug?: any;
  Icon?: any;
  cartData ?: any
}

const Button: FC<ButtonProps> = ({ mode, text, Icon ,slug, cartData}) => {
  return (
    <div
      className={`xl:min-w-64 lg:min-w-60 md:min-w-56 min-w-full my-2 min-h-12 rounded-lg p-2 ${
        mode == "primary" && cartData.loaded == true && "bg-primary text-white"
      } ${
        mode == "primary" && cartData.loaded == false && "bg-gray text-white"
      } ${
        mode == "secondary" && "bg-white text-primary"
      } ${cartData && (Array.isArray(cartData.slugs) ? cartData.slugs.includes(slug) && "grayscale" : "")} border border-primary"} text-lg flex justify-center items-center hover:cursor-pointer`}
    >
      <span className="flex gap-4 items-center">
        {Icon && <FontAwesomeIcon icon={Icon} width={18} height={18}/>} {cartData ? (cartData.loaded ? text : <BarLoader height={18} width={18}/>)  :text}
      </span>
    </div>
  );
};

export default Button;
