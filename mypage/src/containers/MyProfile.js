import React from "react";
import "../styles/mypage.scss";

import UserInfo from "../components/UserInfo";
import UserDesc from "../components/UserDesc";
import UserPhoto from "../components/UserPhoto";

export default function MyProfile() {
  return (
    <div className="my-profile-container">
      <div className="upper-part">
        <UserPhoto />
        <UserInfo />
      </div>
      <UserDesc />
    </div>
  );
}
