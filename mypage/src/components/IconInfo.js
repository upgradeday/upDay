import React from "react";
import "../styles/mypage.scss";

import { BsDot } from "react-icons/bs";
import { HiFire, HiDocumentCheck } from "react-icons/hi2";

export default function IconInfo() {
  return (
    <div>
      <div className="state-icon-infos">
        <div>
          <BsDot className="icon icon-dot" />
          <p>내가 만든</p>
        </div>
        <div>
          <HiFire className="icon icon-fire" />
          <p>진행 중</p>
        </div>
        <div>
          <HiDocumentCheck className="icon icon-done" />
          <p>완료</p>
        </div>
      </div>
    </div>
  );
}
