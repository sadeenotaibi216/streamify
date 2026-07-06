function Button({ children, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`hover:border-white
        font-semibold cursor-pointer rounded  ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
