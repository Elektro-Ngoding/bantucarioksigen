import { MDBNavbar } from "mdbreact";


export default function Navbar() {
  return (
    <div>
      <MDBNavbar
        className="navbar fixed-top navbar-light mb-5"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #F1F3F0",
        }}
      >
        <a className="navbar-brand" href="#">
          <span
            className="badge"
            style={{ fontSize: 25, backgroundColor: "#073180" }}
          >
            Bantu Cari Oksigen
          </span>
        </a>
      </MDBNavbar>
    </div>
  );
}
