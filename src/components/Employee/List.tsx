"use client";
import useFirestore from "@/hooks/useFirestore";
import { Table } from "..";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EmployeeList = () => {
  const { getData, deleteRecord } = useFirestore();
  const [list, setList] = useState<any>();
  const [loader, setLoader] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    getEmployeeList();
  }, []);

  const getEmployeeList = () => {
    getData()
      .then((response) => {
        let employeeList: any = [];
        response.forEach((item) => {
          return employeeList.push({ ...item.data(), id: item.id });
        });
        setList(employeeList);
        setLoader(false);
      })
      .catch((e) => {
        console.log("Failed to fetch ", e.message);
        setLoader(false);
      });
  };

  const deleteAction = (id: string) => {
    deleteRecord(id)
      .then(() => getEmployeeList())
      .catch((e) => console.log("failed to delete", e.message));
  };

  const goToUpdate = (id: string) => router.push(`firestore/update/${id}`);

  if (loader) {
    return (
      <div className="justify-center flex bg-white/50 py-4">
        Fetching Records...
      </div>
    );
  }

  return (
    <Table
      headings={["Name", "Job Role", "Experience", "Organisation", "Action"]}
    >
      {list &&
        list.map((item: any, index: number) => (
          <tr key={`tr_${index}`}>
            <td>{item.name}</td>
            <td>{item.jobRole}</td>
            <td>{item.experience}</td>
            <td>{item.organisation}</td>
            <td>
              <button
                className="px-2 py-2 bg-blue-700 rounded-md text-white mx-2"
                onClick={() => goToUpdate(item.id)}
              >
                Edit
              </button>
              <button
                className="px-2 py-2 bg-red-700 rounded-md text-white"
                onClick={() => deleteAction(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </Table>
  );
};

export default EmployeeList;
