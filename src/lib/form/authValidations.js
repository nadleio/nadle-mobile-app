import * as Yup from "yup";

export const LOGIN_SCHEMA = Yup.object().shape({
  password: Yup.string().min(8, "Minimum 8 characters")
});
