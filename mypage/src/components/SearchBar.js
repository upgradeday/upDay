import React from "react";
import "../styles/mypage.scss";

import { BsSearch } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa6";

export default function SearchBar() {
  return (
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
  );
}
