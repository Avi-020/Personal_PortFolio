import React from "react";
import Image from "next/image";
import styles from "../CSS/HomePage.module.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";

function HomePage() {
  return (
    <>
      <div className={styles.sidebar}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Image
            src="/images/myimg.png"
            width={110}
            height={110}
            alt="Picture of the author"
            style={{
              marginTop: "2vh",
              border: "5px",
              borderStyle: "solid",
              borderColor: "white",
              borderRadius: "100%",
            }}
          />
          <h5 className="mt-2">AVI PAWAR</h5>
          <div
            className="socialMedia"
            style={{
              width: "100%",
              height: "4vh",
              // backgroundColor: "red",
              marginBottom: "2vh",
              marginTop: "0vh",
            }}
          >
            <div
              className="icons"
              style={{
                width: "70%",
                height: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                src="/images/skype.svg"
                width={25}
                height={25}
                alt="skype"
                style={{ marginRight: "2vh" }}
              />
              <Image
                src="/images/github.svg"
                width={25}
                height={25}
                alt="github"
                style={{ marginRight: "2vh" }}
              />
              <Image
                src="/images/instagram.svg"
                width={25}
                height={25}
                alt="instagram"
                style={{ marginRight: "2vh" }}
              />
              <Image
                src="/images/linkedin.svg"
                width={25}
                height={25}
                alt="linkedin"
                style={{ marginRight: "2vh" }}
              />
            </div>
          </div>
        </div>
        <a href="#home">
          <HomeOutlinedIcon className={styles.icons} />
          Home
        </a>

        <a href="#Resume">
          <DescriptionOutlinedIcon className={styles.icons} />
          Resume
        </a>
        <a href="#Projects">
          <TaskOutlinedIcon className={styles.icons} />
          Projects
        </a>
        <a href="#Contact">
          <ContactsOutlinedIcon className={styles.icons} />
          Contact
        </a>
      </div>

      {/* main content  */}

      <div className={styles.content}>
        <div
          className="intro"
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "",
            marginTop: "10%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h6>HI THERE I&apos;M</h6>
          <h1>AVI PAWAR</h1>
          <h5>
            A
            <span
              style={{
                color: "rgb(61 203 203)",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              Front-End Web Developer
            </span>
            passionate about creating interactive applications and experiences
            on the web.
          </h5>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
          unde? Incidunt, aspernatur adipisci! Culpa, a sit? Obcaecati pariatur
          suscipit nobis praesentium amet temporibus veniam totam cupiditate eum
          ea laborum perferendis vitae, corrupti modi veritatis voluptatum
          debitis provident. Aliquam numquam odio rerum consequuntur eum ut
          sapiente veritatis animi temporibus ratione alias nihil, quas ducimus
          enim officia iusto molestiae at voluptatum libero commodi est unde
          facilis molestias? Perferendis quaerat reiciendis laboriosam maxime
          debitis cupiditate, ipsum voluptates ab ea doloremque eligendi tempora
          ex, sed, porro neque quibusdam sapiente illo modi ratione! Asperiores
          ea veritatis nostrum voluptatum, fuga eaque deleniti. Accusamus eius
          suscipit quasi.
        </p>

        <div className="cards in line mt-5">
          <h3>Frontend</h3>

          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/HTMLCSS.png"
                  width={100}
                  height={100}
                  alt="htmlcss"
                />
              </div>
              <div className="mt-2 ms-2"> HTML, CSS</div>
            </div>

            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/bootstrap.png"
                  width={200}
                  height={110}
                  alt="bootstrap"
                />
              </div>
              <div className="mt-2 ms-2"> Bootstrap</div>

            </div>

            <div className={styles.column}>
              <div className={styles.card}>
              <Image
                  src="/images/TsJs.png"
                  width={200}
                  height={110}
                  alt="TsJs"
                />
              </div>
              <div className="mt-2 ms-2"> Javascript, Typescript</div>

            </div>

            <div className={styles.column}>
              <div className={styles.card}>
              <Image
                  src="/images/ReactTS.png"
                  width={200}
                  height={110}
                  alt="ReactTS"
                />
              </div>
              <div className="mt-2 ms-2"> Reactjs</div>

            </div>
            
          </div>
          <div className={styles.column} style={{marginTop:"2vh"}}>
              <div className={styles.card}>
              <Image
                  src="/images/nextjs.png"
                  width={200}
                  height={110}
                  alt="nextjs"
                />
              </div>
              <div className="mt-2 ms-2"> Nextjs</div>

            </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
