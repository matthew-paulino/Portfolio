import Image from "next-image-export-optimizer";
import HandImage from "../../public/img/steady-hand.jpg";
import Styles from "./hero-image.module.css";
export const HeroImage = () => {
  return (
    <div className={Styles.wrapper}>
      <div>
        <Image
          src={"/img/steady-hand.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

{
  /* <img src="https://unsplash.com/photos/2nj7TTqdLu4" />
https://unsplash.com/photos/2nj7TTqdLu4 */
}

{
  /* <>
      <Image
        src="https://example.com/test"
        alt="Landscape picture"
        width={500}
        height={500}
      />
    </> */
}
