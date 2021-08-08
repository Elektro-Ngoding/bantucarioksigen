import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <>
        <Navbar />
      </>
      {children}
    </>
  );
};

export default Layout;
