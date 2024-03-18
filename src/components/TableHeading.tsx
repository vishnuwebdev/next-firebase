import SubmitButton, { PrimaryButton } from "./Button";

const TableHeading = ({ title, actionLabel, action }: any) => {
  return (
    <div className="h-28 w-full justify-between flex items-center px-4">
      <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">
        {title}
      </span>
      {action && actionLabel && (
        <PrimaryButton action={action} label={actionLabel} />
      )}
    </div>
  );
};

export default TableHeading;
