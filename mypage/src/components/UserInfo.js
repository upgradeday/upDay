import React from "react";
import "../styles/mypage.scss";

export default function UserInfo() {
  return (
    <div className="user-info">
      <div className="name">
        <div>
          <p className="font-28px semi-bold">사용자 이름 받아오기</p>
        </div>
        <p className="font-16px">사용자 아이디/이메일 받아오기</p>
      </div>
      <div className="days">
        <p className="font-24px semi-bold">~일 째 업데이 중</p>
        <p className="font-16px ">가입날짜</p>
      </div>
    </div>
  );
}
