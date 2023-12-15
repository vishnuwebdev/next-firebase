"use client";
import { Table } from "..";

const EmployeeList = () => {
  return (
    <Table
      headings={["Name", "Job Role", "Experience", "Organisation", "Action"]}
    >
      <tr>
        <td>Vijay Jain</td>
        <td>Software Tester</td>
        <td>2 Year</td>
        <td>Hcl</td>
        <td>Edit / Delete</td>
      </tr>
      <tr>
        <td>Amit Verma</td>
        <td>DevOps</td>
        <td>4 Year</td>
        <td>Genpact</td>
        <td>Edit / Delete</td>
      </tr>
    </Table>
  );
};

export default EmployeeList;
