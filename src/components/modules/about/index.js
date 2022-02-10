import React from "react";
import banner from "../../../assets/media/banner.jpg";
import mask from "../../../assets/media/Mask.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-text">
          <h1>
            جشنواره <br />
            <span className="line">ملی معماری </span>چیست ؟
          </h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که است.
          </p>
        </div>
        <div className="about-image">
          <img src={banner} alt="banner" className="pic" />
          <img src={mask} alt="mask" className="mask" />
        </div>
      </div>
    </div>
  );
};

export default About;
