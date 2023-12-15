import { ReactNode } from "react";

const TableContainer = ({
  headings,
  children,
}: {
  headings: string[];
  children: ReactNode;
}) => {
  return (
    <table className="mx-4 mb-4">
      <thead>
        <tr>
          {headings.map((item, index) => (
            <th key={`th_${index}`}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default TableContainer;
