import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/kunhee.png"}
          alt="An image showing KunHee"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <h1>Hi! Web Frontend Developer "Lim KunHee"</h1>
      <p>
        블로그 소개 (웹 개발자) <br />
        프론트엔드 프레임워크 Next.js를 사용합니다.
      </p>
    </section>
  );
};

export default Hero;
