import { db } from "@/services/firebase";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const useFirestore = () => {
  const storeData = async (data: any) => {
    const ref = doc(db, "employee", "1");
    return await setDoc(ref, data);
  };

  const storeDataWithCustomId = async (data: any) => {
    const ref = collection(db, "employee");
    return await addDoc(ref, data);
  };

  const getData = async () => {
    const ref = collection(db, "employee");
    return await getDocs(ref);
  };

  const deleteRecord = async (id: string) => {
    const ref = doc(db, "employee", id);
    return await deleteDoc(ref);
  };

  const getDataById = async (id: any) => {
    const ref = doc(db, "employee", id);
    return await getDoc(ref);
  };

  const updateData = async (id: string, data: any) => {
    const ref = doc(db, "employee", id);
    return await updateDoc(ref, data);
  };

  return {
    storeData,
    storeDataWithCustomId,
    getData,
    deleteRecord,
    getDataById,
    updateData,
  };
};

export default useFirestore;
