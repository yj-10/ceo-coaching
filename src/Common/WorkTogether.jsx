import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

function WorkTogether() {
  return (
    <div className="Work__Wrapper">
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center justify-content-lg-center">
          <MDBCol lg="12">
            <div className="Work__head">
              <h1>If You Have Any Question, Feel Free to Call 123-456-7890</h1>
              <p>
                Ac cum nunc vitae ut turpis praesent nunc odio lorem dictumst
                vestibulum sem pharetra urna pretium
              </p>
              <button>Let'd Work Together</button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default WorkTogether;
