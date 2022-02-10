import React from "react";
import { PUBLIC_INFOS } from "../../../constants";
import {
  About,
  Amar,
  Awards,
  Footer,
  Hamian,
  Header,
  News,
  Refrees,
  SignUp,
} from "../../modules";

import "./Home.css";
import Responsive from "./test";

const Home = () => {
  const data = PUBLIC_INFOS;
  return (
    <div className="home">
      <Header />
      <About />
      <Refrees />
      <Awards />
      {/* <News /> */}
      {/* <SignUp /> */}
      {/* <Amar /> */}
      {/*   <Hamian /> */}
      <Footer data={data} />
    </div>
  );
};

export default Home;
