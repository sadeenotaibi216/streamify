type ButtonProps = {
  children: string;
  className?: string;
  onClick?: () => void;
};

function Button({
  children,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`hover:border-white font-semibold cursor-pointer rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;