function Button({
  label,
  className,
  bgColor = "bg-black",
  textColor = "text-white",
  type,
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      className={`${className} ${bgColor} ${textColor} px-4 py-1.5 inline-block rounded-full font-medium font-paragraph`}
    >
      {label}
    </button>
  );
}

export default Button;
