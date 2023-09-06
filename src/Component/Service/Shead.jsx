import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Shead() {
  return (
    <div className="service__head">
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="6" md="6" sm="6" xs="12">
            <div className="service_left">
              <h1>We All Need Help to Realize What We Want Most.</h1>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="service_right">
              <p>
                Diam lorem nulla suspendisse id ullamcorper lobortis id sit nisl
                purus tellus curabitur leo volutpat vitae quisque eros, gravida
                magna diam id elit facilisi gravida at non consectetur nulla leo
                congue in netus ut et habitant massa id libero turpis.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Shead;
