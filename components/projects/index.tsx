import styles from "./projects.module.css";
import Image from "next-image-export-optimizer";

export const Projects = () => {
  const projects = [
    {
      image: "/img/screencapture-pennystjohn-2022-07-08-09_15_02.png",
      url: "/penny",
    },
    {
      image: "/img/screencapture-pennystjohn-2022-07-08-09_15_02.png",
      url: "/nick",
    },
    {
      image: "/img/screencapture-pennystjohn-2022-07-08-09_15_02.png",
      url: "/other",
    },
  ];

  return (
    <div className={styles.alignment}>
      <h2>projects</h2>
      <div className={styles.gridContainer}>
        {projects.map((project) => (
          <div key={project.image} className={styles.imgContainer}>
            <div className={styles.overlay}>
              <div>Penny St. John</div>
            </div>
            <Image src={project.image} alt="" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <Image
  src={"/img/steady-hand-co-2nj7TTqdLu4-unsplash.jpg"}
  alt=""
  layout="fill"
  objectFit="cover"
/>; */
}

// Want project section to look like

// Image with hover effect in a grid

// click on img and go to page with explanation
// hover effect

//skill set
// footer

// make pics clickable to go to page
// make footer better
// the grid changes based on how many projects instead of hardcoded to three
// content inbetween the photos
// skill set page

// footer
// header - maybe contact page
