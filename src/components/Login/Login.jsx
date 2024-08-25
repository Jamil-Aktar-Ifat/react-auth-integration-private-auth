import React from "react";
import LoginPage, {
  Username,
  Password,
  Submit,
  Title,
  Logo,
} from "@react-login-page/page5";
import LoginLogo from "react-login-page/logo";
import { Link } from "react-router-dom";

const Login = () => {
  const styles = { height: 460 };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("form submitted!", email, password);
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
            New Here? <Link className="text-blue-300" to="/register">Register Now</Link>{" "}
          </p>
        </LoginPage>
      </div>
    </form>
  );
};

export default Login;
