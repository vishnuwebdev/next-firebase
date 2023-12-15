import { SubmitButtonT } from "@/types/ButtonTypes";

const SubmitButton = ({ label, large }: SubmitButtonT) => {
  let btnSize = large ? "py-2 px-6 text-xl" : "py-2 px-3 text-md";

  return (
    <div className="flex justify-center mt-6 mb-3">
      <button
        className={`bg-blue-500 rounded-md py-2 px-3 text-white ${btnSize}`}
      >
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;
