"use client";

import { firestoreValidation } from "@/validationSchema/firestore";
import { InputField } from "..";
import SubmitButton from "../Button";

const EmployeeForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = firestoreValidation();

  const submitForm = async (values: any) => {
    console.log("Form Values ", values);
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
          type="text"
          placeholder="Enter Your Name Here..."
          name="name"
          label="Name"
          containerClass="md:w-1/2 px-3 mb-6 md:mb-0"
        />
        <InputField
          register={register}
          error={errors.jobRole}
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
          type="text"
          placeholder="Enter Your Organisation Here..."
          name="organisation"
          label="Organisation"
          containerClass="md:w-1/2 px-3"
        />
      </div>

      <SubmitButton label="Save" large />
    </form>
  );
};

export default EmployeeForm;
