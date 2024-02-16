"use client";
import {
  ContainerCard,
  EmployeeForm,
  EmployeeList,
  Heading,
} from "@/components";
import TableHeading from "@/components/TableHeading";
import { FIRESTORE_ROUTE } from "@/constants/routes";
import useAuthentication from "@/hooks/useAuthentication";
import { useRouter } from "next/navigation";

const Firestore = () => {
  useAuthentication();
  const router = useRouter();

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
      <EmployeeForm />
    </ContainerCard>
  );
};

export default Firestore;
