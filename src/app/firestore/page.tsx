"use client";
import {
  ContainerCard,
  EmployeeForm,
  EmployeeList,
  Heading,
} from "@/components";
import useAuthentication from "@/hooks/useAuthentication";

const Firestore = () => {
  useAuthentication();

  return (
    <ContainerCard>
      <Heading title="Firestore Actions" />
      <EmployeeForm />
      <EmployeeList />
    </ContainerCard>
  );
};

export default Firestore;
