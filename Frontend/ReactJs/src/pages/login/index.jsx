import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login">
      <h2 className="login__header">Sign in</h2>
      <form action="" className="login__form">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button>Sign in</button>
        <Link className="login__form--forgot" to={"/forgot"}>Forgot Password ?</Link>
        <span>Not have account ? <Link to={"/signup"}>Sign up</Link></span>
      </form>
    </div>
  );
}

export default LoginPage;
