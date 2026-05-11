import { forwardRef, useId } from "react";

function Select({ label, className, options = [], ...props }, ref) {
  const id = useId();
  return (
    <div className="my-2">
      {label && (
        <label
          className="mb-2 inline-block font-medium font-paragraph"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        {...props}
        className={`${className} w-full pl-2 py-1.5 border-amber-400 border-2 outline-none rounded-md  placeholder:text-black/20`}
        id={id}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
