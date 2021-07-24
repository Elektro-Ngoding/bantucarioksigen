import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact";

export default function login() {
  return (
    <div>
      <MDBContainer
        style={{ marginTop: 100, backgroundColor: "#F1F3F0", padding: 50 }}
      >
        <MDBRow center>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn>Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
