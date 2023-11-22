import { Input } from "@nextui-org/react";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const PasswordInput = ({ ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...props}
      endContent={
        <button
          type="button"
          className="focus:outline-none"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <IoEyeOffOutline className="text-2xl pointer-events-none text-default-400" />
          ) : (
            <IoEyeOutline className="text-2xl pointer-events-none text-default-400" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};

export default PasswordInput;
