import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  password: Yup.string().min(8, "Minimum 8 characters"),
  username: Yup.string().min(3, "Minimum 3 characters")
});
