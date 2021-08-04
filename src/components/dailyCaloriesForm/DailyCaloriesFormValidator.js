import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  height: Yup.number()
    .required("Required field")
    .typeError("Only numbers allowed")
    .negative("Insert a 2 to 3 digit number")
    .min(100, "Insert your height from 100 cm")
    .max(250, "Введите Ваш рост до 250см")
    .integer(),
  age: Yup.number()
    .required("Required field")
    .typeError("Only numbers allowed")
    .min(18, "Insert your age from 18 years old")
    .max(99, "Insert you age up to 100 years old")
    .integer(),
  weight: Yup.number()
    .required("Required field")
    .typeError("Only numbers allowed")
    .min(20, "Insert you current weight from 20 kg")
    .max(500, "Insert your current weight up to 500 kg")
    .integer(),
  desiredWeight: Yup.number()
    .required("Required field")
    .typeError("Only numbers allowed")
    .min(20, "Insert you target weight from 20 kg")
    .max(500, "Insert you target weight up to 500 kg")
    .integer(),
});
export default BasicFormSchema;
