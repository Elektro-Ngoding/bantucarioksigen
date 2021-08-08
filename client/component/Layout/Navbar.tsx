import { MDBNavbar } from "mdbreact";


export default function Navbar() {
  return (
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
         {/* <MDBDropdown>
            <MDBDropdownToggle backgroundColor="#073180">Menu</MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem href="Penjual">Penjual</MDBDropdownItem>
              <MDBDropdownItem href="adminOksigen">admin Oksigen</MDBDropdownItem>
              <MDBDropdownItem href="Auth">Login</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
         */}
      </MDBNavbar>
  );
}
