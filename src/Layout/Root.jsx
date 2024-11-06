import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <main className="">
      <Navbar />
      {/* <Header /> */}
      <Outlet />
    </main>
  );
};

export default Root;
