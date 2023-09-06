import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";

function WhatClient() {
  return (
    <div className="WhatClient">
      <MDBContainer>
        <div className="WhatClient__head">
          <h1> What Clients Are Saying</h1>
        </div>

        <div className="WhatClient__box">
          <figure>
            <img src="pic_trulli.jpg" alt="Trulli" />
          </figure>
          <div className="WhatClient__text">
            <blockquote>
              Justo vestibulum risus imperdiet consectetur consectetur pretium
              urna augue etiam risus accumsan volutpat urna, eu semper enim, est
              aliquam laoreet urna fringilla viverra.
            </blockquote>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}

export default WhatClient;
