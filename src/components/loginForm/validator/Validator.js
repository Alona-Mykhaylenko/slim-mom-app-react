import * as yup from "yup";

let schema = yup.object().shape({
  email: yup
    .string()
    .min(3, "*3 symbols minimum")
    .max(50, "*email is too long")
    .email("* Email must contain @ ")
    .required("*Required field"),
  password: yup
    .string()
    .min(3, "*3 symbols minimum")
    .max(50, "*Name is too long")
    .required("*Required field"),
});

export default schema;
