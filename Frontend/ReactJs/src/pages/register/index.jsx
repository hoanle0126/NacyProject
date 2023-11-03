import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="login">
      <h2 className="login__header">Sign up</h2>
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
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
        <button>Sign in</button>
        <span>
          Already have account ? <Link to={"/"}>Sign in</Link>
        </span>
      </form>
    </div>
  );
}

export default RegisterPage;
