import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-100">
      <>
        <Navbar />
      </>
      {children}
      <>
        <Footer/>
      </>
    </main>
  );
};

export default Layout;
