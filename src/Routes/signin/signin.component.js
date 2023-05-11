import { signInWithGooglePopup } from "../../helpers/firebase/firebase.helpers";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div className="signin-container">
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};
export default SignIn;
