import React, { useContext } from "react";
import LoginPage, {
  Username,
  Password,
  Submit,
  Title,
  Logo,
} from "@react-login-page/page5";
import LoginLogo from "react-login-page/logo";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const styles = { height: 460 };

  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("form submitted!", email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <div style={styles}>
        <LoginPage>
          <Username name="email" placeholder="Your Email" />
          <Password name="password" placeholder="Your Password" />
          <Submit>Login</Submit>
          <Title />
          <Logo>
            <LoginLogo />
          </Logo>
          <p className="mt-4">
            New Here?{" "}
            <Link className="text-blue-300" to="/register">
              Register Now
            </Link>{" "}
          </p>
          <p>
            Sign in with{" "}
            <button onClick={handleGoogleSignIn} className="btn btn-ghost">
              Google
            </button>
          </p>
        </LoginPage>
      </div>
    </form>
  );
};

export default Login;
