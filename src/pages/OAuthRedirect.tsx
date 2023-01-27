import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axiosOAuth from "@utils/axiosOAuth";
import axiosConfig from "@utils/axiosConfig";

import axios from "axios";
import { useUserStore } from "@store/userStore";
import { useLoginUserStore } from "@store/loginUserStore";
import { AlertBox } from "@components/common/AlertBox/AlertBox";

const OAuthRedirect = () => {
  let provider_id = "";

  const setOAuthLogin = useUserStore((state) => state.setOAuthLogin);
  const setEmail = useUserStore((state) => state.setEmail);
  const setEmailYn = useUserStore((state) => state.setEmailYn);
  const setUserInfo = useLoginUserStore((state) => state.setUserInfo);

  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const [notMember, setNotMember] = useState(false);

  let authCode = location.search.slice(6);
  let url = "";

  if (location.pathname === "/oauth/google/callback") {
    url = `/oauth/google/callback?code=${authCode}`;
  } else if (location.pathname === "/oauth/naver/callback") {
    url = `/oauth/naver/callback?code=${authCode}`;
  }

  const authLogin = async () => {
    axiosConfig
      .get(url)
      .then((res) => {
        if (res.data.newUser === true) {
          setOAuthLogin(true);
          setEmail(res.data.email);
          setEmailYn("Y");
          navigate("/signup/agree");
        } else {
          setOAuthLogin(false);
          console.log(res);
          setNotMember(false);
          // setLoading(true);
          const memberId = res.data.memberId;
          console.log(memberId);
          axiosConfig
            .get(`/member/${memberId}`)
            .then((res) => {
              setUserInfo(res.data);
              // setLoading(false);
              navigate("/");
              window.location.reload();
            })
            .catch((err) => {
              console.log(`otherLoginPage: ${err}`);
            });
        }
      })
      .catch((err) => {
        if (err.response.data.msg === "탈퇴한 회원입니다.") {
          setNotMember(true);
          setTimeout(() => navigate("/login"), 1000);
        } else {
          setNotMember(false);
        }
        console.log(err.response.data.msg);
      });
  };

  useEffect(() => {
    authLogin();
    console.log(`인증코드: ${authCode}`);
  }, [authCode]);

  return (
    <div>
      {/* {loading && <Loading/>} */}
      <Loading />

      {notMember && <AlertBox text="탈퇴한 계정입니다" type={false} />}
    </div>
  );
};

export default OAuthRedirect;
