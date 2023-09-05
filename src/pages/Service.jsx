import React from "react";
import Shead from "../Component/Service/Shead";
import MainServices from "../Component/Service/MainServices";
import WhatClientSaya from "../Component/Service/WhatClientSaya";
import WorkTogether from "../Common/WorkTogether";
import Footer from "../Common/Footer";
import Topics from "../Common/Topics"

function Service() {
  return (
    <>
      <Shead />
      <Topics />
      <MainServices />
      <WhatClientSaya />
      <WorkTogether />
      <Footer />
    </>
  );
}

export default Service;
