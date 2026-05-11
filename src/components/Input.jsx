import { forwardRef, useId } from "react";

function Input(
  { label, className, type = "text", placeHolder, ...props },
  ref,
) {
  const id = useId();
  return (
    <div className="mb-4">
      {label && (
        <label
          className="mb-2 inline-block font-medium font-paragraph"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        {...props}
        type={type}
        placeholder={placeHolder}
        className={`${className} w-full pl-2 py-1.5 border-amber-400 border-2 outline-none rounded-md focus:text-amber-500 placeholder:text-black/20`}
      />
    </div>
  );
}

export default forwardRef(Input);
