import React from "react";
import "../styles/mypage.scss";

import Taps from "../components/Taps";
import SearchBar from "../components/SearchBar";
import IconInfo from "../components/IconInfo";

export default function Manegement() {
  return (
    <div>
      <Taps />
      <div className="setting-container">
        <SearchBar />
        <IconInfo />
      </div>
    </div>
  );
}
