import React from "react";
import { FaSortDown } from "react-icons/fa6";

import { BsSearch, BsDot } from "react-icons/bs";
import { HiFire, HiDocumentCheck } from "react-icons/hi2";

export default function ChallengeList() {
  return (
    <div>
      <div className="taps">
        <div className="font-24px">개인정보 관리</div>
        <div className="font-24px">챌린지 관리</div>
      </div>
      <div className="setting-container">
        <div className="search-bar">
          <select className="font-16px semi-bold">
            <option>전체</option>
            <option>식단</option>
            <option>학습</option>
            <option>운동</option>
            <option>습관</option>
          </select>
          <input className="font-16px" placeholder="검색어를 입력하세요" />
          <button>
            <BsSearch className="font-24px" />
          </button>
        </div>
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
    </div>
  );
}
