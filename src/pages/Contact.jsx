import React from "react";
import Footer from "../Common/Footer";
import WorkTogether from "../Common/WorkTogether";
import Chead from "../Component/Contact/Chead";
import ReadyWork from "../Component/Contact/ReadyWork";
import Feature from "../Common/Feature";

function Contact() {
  return (
    <>
      <Chead />
      <Feature title={"I'VE BEEN FEATURED ON..."}/>
      <ReadyWork />
      <WorkTogether />
      <Footer />
    </>
  );
}

export default Contact;
