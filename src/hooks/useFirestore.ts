import { db, storage } from "@/services/firebase";
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

import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  list,
  deleteObject,
  listAll,
} from "firebase/storage";

const useFirestore = () => {
  const storeDataWithCustomId = async (data: any) => {
    const ref = doc(db, "employee", "1");
    return await setDoc(ref, data);
  };

  const storeData = async (data: any) => {
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

  const uploadFile = async (file: any) => {
    const ref = storageRef(storage, "custom/sample3.png");
    return await uploadBytesResumable(ref, file)
      .then((e) => console.log("success", e))
      .catch((e) => console.log("error caught", e));
  };

  const removeFile = async () => {
    const ref = storageRef(storage, "custom/sample.png");
    return await deleteObject(ref)
      .then((e) => console.log("File Removed"))
      .catch((e) => console.log("error caught", e));
  };

  const getFileList = async () => {
    const ref = storageRef(storage, "custom");
    return await listAll(ref)
      .then((response: any) => {
        response.items.forEach(async (itemRef: any) => {
          await getDownloadURL(itemRef)
            .then((url) => console.log("file url ", url))
            .catch((e) => console.log("error caught", e));
        });
      })
      .catch((e) => console.log("error caught", e));
  };

  return {
    storeData,
    storeDataWithCustomId,
    getData,
    deleteRecord,
    getDataById,
    updateData,
    uploadFile,
    removeFile,
    getFileList,
  };
};

export default useFirestore;
