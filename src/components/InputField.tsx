import { InputFieldT } from "@/types/FormTypes";

const InputField = ({
  type,
  name,
  placeholder,
  label,
  register,
  error,
  containerClass,
  hint,
  defaultValue,
}: InputFieldT) => {
  const inputClass = error
    ? "border-red-500/50 text-red-400 placeholder:text-red-200 "
    : "border-gray-500/50 text-black";

  return (
    <div className={` ${containerClass} `}>
      <label
        className="block uppercase tracking-wide  text-xs font-bold mb-2 text-black"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-grey-lighter rounded py-3 px-4 mb-3 border-[1px] ${inputClass}`}
        id={name}
        defaultValue={defaultValue}
        type={type}
        name={name}
        {...register(name)}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-red-500 text-xs italic mb-2 p-1 bg-red-300/20  px-3 rounded-lg border-red-500/20 border-[1px] ">
          {error.message}
        </p>
      )}
      {hint && (
        <p className="text-gray-800 px-3 bg-yellow-300/30 p-1 rounded-lg text-xs italic">
          {hint}
        </p>
      )}
    </div>
  );
};

export default InputField;
