import React from "react";
import "../styles/mypage.scss";

import { HiFire, HiDocumentCheck, HiMiniTrophy } from "react-icons/hi2";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

export default function UpdayReport() {
  return (
    <div className="section">
      <p className="container-title font-36px">업데이 리포트</p>
      <div className="upday-report-container">
        <div>
          <p>진행 중</p>
          <HiFire className="icon-report icon-fire" />
          <p>4</p>
        </div>
        <div>
          <p>완료</p>
          <HiDocumentCheck className="icon-report icon-done" />
          <p>10</p>
        </div>
        <div>
          <p>목표 달성율</p>
          <HiMiniTrophy className="icon-report icon-trophy" />
          <FaStar className="icon-star" />
          <p>80%</p>
        </div>
      </div>
    </div>
  );
}
