import React from "react";

const SubmitButton = (props: any) => {
  return (
    <div className="flex justify-center mt-6 mb-3">
      <PrimaryButton {...props} />
    </div>
  );
};

export const PrimaryButton = ({ large, label, action }: any) => {
  let btnSize = large ? "py-2 px-6 text-xl" : "py-2 px-3 text-md";

  return (
    <button
      onClick={action}
      className={`bg-blue-500 rounded-md text-white ${btnSize}`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
