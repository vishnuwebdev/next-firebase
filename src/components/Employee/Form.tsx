"use client";

import { firestoreValidation } from "@/validationSchema/firestore";
import { InputField } from "..";
import SubmitButton from "../Button";
import { useEffect, useState } from "react";
import useFirestore from "@/hooks/useFirestore";

const EmployeeForm = ({ data }: any) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = firestoreValidation();
  const { storeData, updateData } = useFirestore();
  const [formData, setFormData] = useState<any>();

  useEffect(() => {
    if (data) {
      const { id, ...formInitialValues } = data;
      reset(formInitialValues);
    }
  }, [data]);

  const submitForm = async (values: any) => {
    if (data) {
      updateData(data.id, values)
        .then((response) => console.log("Recored Updated"))
        .catch((e) => console.log("error", e));
    } else {
      storeData(values)
        .then((response) => {
          console.log("success");
        })
        .catch((e) => {
          console.log("failed");
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
    >
      <div className="-mx-3 md:flex mb-6">
        <InputField
          register={register}
          error={errors.name}
          defaultValue={formData?.name}
          type="text"
          placeholder="Enter Your Name Here..."
          name="name"
          label="Name"
          containerClass="md:w-1/2 px-3 mb-6 md:mb-0"
        />
        <InputField
          register={register}
          error={errors.jobRole}
          defaultValue={formData?.jobRole}
          type="text"
          placeholder="Enter Your Job Role Here..."
          name="jobRole"
          label="Job Role"
          containerClass="md:w-1/2 px-3"
        />
      </div>
      <div className="-mx-3 md:flex mb-2">
        <InputField
          register={register}
          error={errors.experience}
          defaultValue={formData?.experience}
          type="text"
          placeholder="Enter Your Experince Here..."
          name="experience"
          label="Relevent Experience"
          containerClass="md:w-1/2 px-3 mb-6 md:mb-0"
          hint="Enter number of Years only in numeric form"
        />

        <InputField
          register={register}
          error={errors.organisation}
          defaultValue={formData?.organisation}
          type="text"
          placeholder="Enter Your Organisation Here..."
          name="organisation"
          label="Organisation"
          containerClass="md:w-1/2 px-3"
        />
      </div>

      <SubmitButton label="Submit" large />
    </form>
  );
};

export default EmployeeForm;
