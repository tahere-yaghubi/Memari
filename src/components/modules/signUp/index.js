import React from "react";
import { Button } from "../../elements";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="container">
        <div className="signUp__content">
        <h1>آثار خود را ثبت کنید</h1>
        <span>با مراجعه به بخش کاربری آثار خود را ثبت کنید</span>
        <p>
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون استفاده قرار می گیرد و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد
        </p>

        <Button hasIcon hasBg rotate theme="dark" value="ورود به بخش کاربری" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
