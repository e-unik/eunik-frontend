import { useEffect, useState } from "react";
import { getCallbackParameters, getTelegramUserData } from "./api/tgScript";
import { useNavigate } from "react-router";



export default function TgCallback() {
  const navigate = useNavigate();

  const checkLogin = () => {

    const tg_user = getTelegramUserData();
    if (tg_user === false) {
      navigate('/login');
      return;
    }
    console.log(tg_user);
    const first_name = tg_user['first_name'];
    const last_name = tg_user['last_name'];
    const username = tg_user['username'];

    if (username !== undefined) {
      console.log(`Hello ${username} (${first_name} ${last_name})`);
    } else {
      console.log(`Hello ${first_name} ${last_name}`);
    }

    const photo_url = tg_user['photo_url'];
    if (photo_url !== undefined) {
      console.log(photo_url);
    }
  }

  const loginUser = () => {
    const params = getCallbackParameters();
    console.log(params);
  }

  useEffect(() => {
    loginUser();
  }, [])

  return (
    <></>
  )
}