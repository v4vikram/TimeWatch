import * as Yup from "yup";

export const homeFormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email"),
  mobile: Yup.string()
  .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
  .required("Mobile number is required"),
  // location: Yup.object(),
  // message: Yup.string().trim(),
});
