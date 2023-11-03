import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <div className="auth">
        <div className="auth__form">
          <Outlet />
        </div>
        <div className="auth__image"></div>
      </div>
    </>
  );
}

export default AuthLayout;
