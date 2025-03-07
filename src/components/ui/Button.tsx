import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: "gray" | "red" | "blue";
  size: "small" | "medium" | "large";
}

export const Button = ({
  children,
  color = "gray",
  size = "medium",
  onClick,
  type,
}: ButtonProps) => {
  const getColorStyles = (color: string) => {
    switch (color) {
      case "gray":
        return "bg-gray-400 text-white hover:bg-gray-500";
      case "red":
        return "bg-red-500 text-white hover:bg-red-600";
      case "blue":
        return "bg-blue-400 text-white hover:bg-blue-500";
    }
  };

  const getSizeStyles = (size: string) => {
    switch (size) {
      case "small":
        return "w-[64px] h-[32px]";
      case "medium":
        return "w-[85px] h-[40px]";
      case "large":
        return "w-[96px] h-[48px]";
    }
  };

  return (
    <button
      className={`rounded-lg ${getColorStyles(color)} ${getSizeStyles(size)} `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
