"use client";
import { ContainerCard } from "@/components";
import TableHeading from "@/components/TableHeading";
import useFirestore from "@/hooks/useFirestore";

const FileStorage = (props: any) => {
  const { uploadFile, removeFile, getFileList } = useFirestore();

  const handleFile = ({ target }: any) => {
    if (target.files) {
      const file = target.files[0];
      uploadFile(file);
    }
  };

  return (
    <ContainerCard>
      <TableHeading title="Image Editor" />
      <div className="px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className=" flex mb-6">
          <input type="file" name="file" onChange={handleFile} />
        </div>
        <button type="button" onClick={getFileList}>
          Get File List
        </button>
      </div>
    </ContainerCard>
  );
};

export default FileStorage;
