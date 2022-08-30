import Image from "next-image-export-optimizer";
import Styles from "./hero-image.module.css";
export const HeroImage = () => {
  return (
    <div className={Styles.wrapper}>
      <div>
        <Image
          // src={"/img/steady-hand-co-2nj7TTqdLu4-unsplash.jpg"}
          src={"/img/jeffrey-clayton-FYqvkG8Ew4Q-unsplash.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center 37%"
          // width="100%"
          // height="100%"
        />
        {/* /Users/matthewpaulino/Desktop/portfolio-next/public/img/steady-hand-co-2nj7TTqdLu4-unsplash.jpg */}
      </div>
    </div>
  );
};
