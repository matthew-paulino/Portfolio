import styles from "./projects.module.css";
import Image from "next-image-export-optimizer";
import Link from "next/link";

export const Projects = () => {
  const projects = [
    {
      image: "/img/screencapture-pennystjohn-2022-07-08-09_15_02.png",
      url: "/penny-st-john",
      label: "Penny St. John",
    },
    {
      image: "/img/Pokemon.png",
      url: "/pokemon-project",
      label: "Pokemon",
    },
    {
      image: "/img/Home-Page.png",
      url: "/matthew-paulino",
      label: "Matthew Paulino",
    },
    {
      image: "/img/Heather.png",
      url: "/heather-poundstone",
      label: "Heather Poundstone",
    },
  ];

  // Do the math for each row and split into an array of rows
  // Each row is rendered as a flex box where elements can span full width of the row.

  let rows = [];
  const chunkSize = 4;
  for (let index = 0; index < projects.length; index += chunkSize) {
    const chunk = projects.slice(index, index + chunkSize);
    rows.push(chunk);
  }

  // If the last row only has a single image, move it into the row above it.
  let lastRow = rows[rows.length - 1];
  console.log("lastRow", lastRow);
  if (rows.length > 1 && lastRow.length === 1) {
    // Assigns the last row value into the previous row
    console.log("rows", rows);
    rows[rows.length - 2].push(lastRow[0]);
    // Cuts off the last row (which is now empty)
    rows = rows.slice(0, rows.length - 1);
    console.log("new rows", rows);
  }

  return (
    <div className={styles.alignment}>
      <h2>Projects</h2>
      <div>
        {/* Each Row */}
        {rows.map((row, i) => (
          // make picture clickabel to go to url
          // use -- import Link from "next/link"; <link></link>

          <div key={i} className={styles.row}>
            {row.map((project) => (
              // Each Image
              <Link key={i} href={project.url}>
                <div key={project.image} className={styles.imgContainer}>
                  <div className={styles.overlay}>
                    <div>{project.label}</div>
                  </div>
                  <Image
                    src={project.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
