import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../helpers/firebase/firebase.helpers";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div className="signin-container">
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};
export default SignIn;
