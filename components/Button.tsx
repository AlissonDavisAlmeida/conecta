
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gray" | "red";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "gray",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center font-medium rounded-[30px] border px-6 py-2 cursor-pointer text-[14px] hover:opacity-90 transition-opacity font-poppins font-semibold";

  const variantStyles =
    variant === "gray"
      ? "bg-transparent border-[#CED4DE] text-[#333333]"
      : "bg-[#FF606C] border-[#FF606C] text-white";

  const widthStyle = fullWidth ? "w-full" : "w-[142px]";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${widthStyle} ${className}`}
      style={{ height: "38px" }}
      {...props}
    >
      {children}
    </button>
  );
};
