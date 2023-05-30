import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../helpers/firebase/firebase.helpers";
import Button from "../../components/button/button.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <Button
        onClick={logGoogleUser}
        children="Sign in with Google"
        buttonType="google"
      />
      <SignUpForm />
    </div>
  );
};
export default SignIn;
