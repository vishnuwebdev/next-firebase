"use client";
import { ContainerCard, EmployeeList } from "@/components";
import TableHeading from "@/components/TableHeading";
import { FIRESTORE_ROUTE_ADD } from "@/constants/routes";
import useAuthentication from "@/hooks/useAuthentication";
import { useRouter } from "next/navigation";

const Firestore = () => {
  useAuthentication();
  const router = useRouter();

  const handleAction = () => {
    router.push(FIRESTORE_ROUTE_ADD);
  };

  return (
    <ContainerCard>
      <TableHeading
        title="Firestore Actions"
        action={handleAction}
        actionLabel="Add New"
      />
      <EmployeeList />
    </ContainerCard>
  );
};

export default Firestore;
