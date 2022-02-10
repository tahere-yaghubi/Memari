import React from "react";
import { Button } from "../../elements";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="container">
        <h1>آثار خود را ثبت کنید</h1>
        <span>با مراجعه به بخش کاربری آثار خود را ثبت کنید</span>
        <p>
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون استفاده قرار می گیرد و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد
        </p>
        <Button value="ورود به بخش کاربری" hasIcon hasBg />
      </div>
    </div>
  );
};

export default SignUp;
