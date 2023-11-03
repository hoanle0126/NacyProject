import { Outlet } from "react-router-dom";
import Header from "./Header";

function DefaultLayout() {
  return (
    <div className="default">
      <Header />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
