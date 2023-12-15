import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const firestoreSchema = Yup.object({
  name: Yup.string().required("Please fill your name"),
  jobRole: Yup.string().required("Please fill your current job role"),
  experience: Yup.number()
    .typeError("Please enter number only")
    .required("Please fill your relevent experience"),
  organisation: Yup.string().required(
    "Please fill your current organisation name"
  ),
});

export const firestoreValidation = () =>
  useForm({
    resolver: yupResolver(firestoreSchema),
  });
