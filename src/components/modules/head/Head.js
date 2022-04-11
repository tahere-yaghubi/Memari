import React, { useState } from "react";

import logo from "../../../assets/media/logo.svg";
import { Button, Search } from "../../elements";

import "./Head.css";

const Head = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className="head">
      {" "}
      <Button value="ثبت اثر در جشنواره" theme="guest" className="btn_margin" />
      <img src={logo} alt="logo" />
      <div>
        <Search search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Head;
