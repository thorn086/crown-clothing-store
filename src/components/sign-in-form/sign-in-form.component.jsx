import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../helpers/firebase/firebase.helpers";
import "./sign-in-form.styles.scss";
const logGoogleUser = async () => {
  await signInWithGooglePopup();
};

const defaultSignInFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [signInFields, setSignInFields] = useState(defaultSignInFields);
  const { email, password } = signInFields;
  const resetSignInFields = () => {
    setSignInFields(defaultSignInFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInFields({ ...signInFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetSignInFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sign-in-form">
      <h2>Already have an account</h2>
      <span>Sign In</span>
      <form action="sign-in" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button children="Sign In" />
          <Button
            onClick={logGoogleUser}
            children="Google Sign In"
            buttonType="google"
            type="button"
          />
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
