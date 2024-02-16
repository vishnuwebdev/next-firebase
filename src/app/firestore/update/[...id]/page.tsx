"use client";
import { ContainerCard } from "@/components";
import TableHeading from "@/components/TableHeading";
import { FIRESTORE_ROUTE } from "@/constants/routes";
import useAuthentication from "@/hooks/useAuthentication";
import { db } from "@/services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Firestore = (props: any) => {
  useAuthentication();
  const router = useRouter();

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = () => {
    const id = props.params.id[0];
    const ref = doc(db, "employee", id);
    getDoc(ref)
      .then((response) => console.log("infor", response.data()))
      .catch((e) => console.log("error caught", e.message));
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
    </ContainerCard>
  );
};

export default Firestore;
