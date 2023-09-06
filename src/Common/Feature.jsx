import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import logo from "../assest/img/Home/AS FEATURED IN/logo.png";
function Feature(props) {
  return (
    <div className="Feature">
      <MDBContainer>
        <div className="Feature__title">
          <h1>{props.title}</h1>
        </div>
        <MDBRow>
          {/* logo 1  */}
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <div className="Feature__icons">
              <figure>
                <img
                  src={logo}
                  className="img-fluid"
                  loading="lazy"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </MDBCol>
          {/* logo 1  */}
          {/* logo 2 */}
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <div className="Feature__icons">
              <figure>
                <img
                  src={logo}
                  className="img-fluid"
                  loading="lazy"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </MDBCol>
          {/* logo 2 */}

          {/* logo 3 */}
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <div className="Feature__icons">
              <figure>
                <img
                  src={logo}
                  className="img-fluid"
                  loading="lazy"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </MDBCol>
          {/* logo 3 */}
          {/* logo 4 */}
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <div className="Feature__icons">
              <figure>
                <img
                  src={logo}
                  className="img-fluid"
                  loading="lazy"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </MDBCol>
          {/* logo 4 */}
          {/* logo 5  */}
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <div className="Feature__icons">
              <figure>
                <img
                  src={logo}
                  className="img-fluid"
                  loading="lazy"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </MDBCol>
          {/* logo 5 */}
          {/* logo 6 */}
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <div className="Feature__icons">
              <figure>
                <img
                  src={logo}
                  className="img-fluid"
                  loading="lazy"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </MDBCol>
          {/* logo 6  */}
          {/* logo 7 */}

          <MDBCol lg="3" md="4" sm="6" xs="12">
            <div className="Feature__icons">
              <figure>
                <img
                  src={logo}
                  className="img-fluid"
                  loading="lazy"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </MDBCol>
          {/* logo 7  */}
          {/* logo 8  */}
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <div className="Feature__icons">
              <figure>
                <img
                  src={logo}
                  className="img-fluid"
                  loading="lazy"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </MDBCol>
          {/* logo 8 */}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Feature;
