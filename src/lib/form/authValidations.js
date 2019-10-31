import * as Yup from "yup";

export const SIGNUP_SCHEMA = Yup.object().shape({
  username: Yup.string().min(3, "Minimum 3 characters"),
  email: Yup.string().email("Invalid email"),
  password: Yup.string().min(8, "Minimum 8 characters")
});
