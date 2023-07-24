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
          Welcome to my personal portfolio website I am a passionate and
          skilled front-end web developer with a wealth of experience in
          creating captivating and interactive websites. With a keen eye for
          design and a knack for transforming ideas into fully functional
          digital experiences	&sbquo; I take pride in crafting user-friendly interfaces
          that leave a lasting impression. Here	&sbquo; you&apos;ll find a showcase of my
          diverse projects	&sbquo; highlighting my expertise in HTML	&sbquo; CSS	&sbquo; JavaScript	&sbquo;
          and other cutting-edge technologies. Join me on this digital journey
          as I invite you to explore the innovative world of web development
          through my work. Let&apos;s collaborate and turn your visions into reality
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
              <div className="mt-2 ms-2"> HTML&sbquo; CSS</div>
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
              <div className="mt-2 ms-2"> Javascript&sbquo; Typescript</div>
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
          <div className={styles.row}>
            <div className={styles.column} style={{ marginTop: "2vh" }}>
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
        <div className="projects mt-5 ">
          <div className={styles.row}>
            <h3 className="ms-3 mb-3">Projects</h3>

            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/amazon.png"
                  width={200}
                  height={110}
                  alt="amazon"
                />
              </div>
              <div className="mt-2 ms-2"> e-Commerce</div>
            </div>

            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/ToDO.png"
                  width={200}
                  height={110}
                  alt="ToDO"
                />
              </div>
              <div className="mt-2 ms-2"> ToDo List</div>
            </div>

            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/news.png"
                  width={200}
                  height={110}
                  alt="news"
                />
              </div>
              <div className="mt-2 ms-2"> Daily News</div>
            </div>

            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/texteditor.png"
                  width={200}
                  height={110}
                  alt="texteditor"
                />
              </div>
              <div className="mt-2 ms-2"> TextUtils</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
