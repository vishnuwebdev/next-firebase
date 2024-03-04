"use client";
import { ContainerCard, EmployeeForm } from "@/components";
import TableHeading from "@/components/TableHeading";
import { FIRESTORE_ROUTE } from "@/constants/routes";
import useAuthentication from "@/hooks/useAuthentication";
import { db } from "@/services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Firestore = (props: any) => {
  useAuthentication();
  const router = useRouter();
  const [employeeData, setEmployeeData] = useState<any>(undefined);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = () => {
    const id: string = props.params.id[0];
    if (id) {
      const ref = doc(db, "employee", id);
      getDoc(ref)
        .then((response) => {
          const data = response.data();
          setEmployeeData({
            id,
            ...data,
          });
        })
        .catch((e) => console.log("error caught", e.message));
    }
  };

  const handleAction = () => {
    router.push(FIRESTORE_ROUTE);
  };

  return (
    <ContainerCard>
      <TableHeading
        title="Firestore Actions"
        action={handleAction}
        actionLabel={"List"}
      />
      <EmployeeForm data={employeeData} />
    </ContainerCard>
  );
};

export default Firestore;
