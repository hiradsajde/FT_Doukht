import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  mode?: string;
  text?: string;
  ref?: any;
  Icon?: any;
}

const Button: FC<ButtonProps> = ({ mode, text, Icon }) => {
  return (
    <div
      className={`xl:min-w-64 lg:min-w-60 md:min-w-56 min-w-full my-2 min-h-12 rounded-lg p-2 ${
        mode == "primary" && "bg-primary text-white"
      } ${
        mode == "secondary" && "bg-white text-primary"
      } border border-primary"} text-lg flex justify-center items-center hover:cursor-pointer`}
    >
      <span>
        {Icon && <FontAwesomeIcon icon={Icon} />} {text}
      </span>
    </div>
  );
};

export default Button;
