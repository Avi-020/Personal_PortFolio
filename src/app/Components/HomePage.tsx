import React from "react";
import Image from "next/image";
import styles from "../CSS/HomePage.module.css";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Home,
  StickyNote,
  Contact,
  ClipboardCheck,
} from "lucide-react";

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
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <div
                className="circle"
                style={{
                  width: "5vh",
                  height: "5vh",
                  backgroundColor: "black",
                  borderRadius: "100%",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Github
                  style={{
                    transform: "translateY(-50%)",
                    position: "absolute",
                    top: "50%",
                  }}
                />
              </div>
              <div
                className="circle"
                style={{
                  width: "5vh",
                  height: "5vh",
                  backgroundColor: "black",
                  borderRadius: "100%",
                  marginLeft: "1vh",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Instagram
                  style={{
                    transform: "translateY(-50%)",
                    position: "absolute",
                    top: "50%",
                  }}
                />
              </div>
              <div
                className="circle"
                style={{
                  width: "5vh",
                  height: "5vh",
                  backgroundColor: "black",
                  borderRadius: "100%",
                  marginLeft: "1vh",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Twitter
                  style={{
                    transform: "translateY(-50%)",
                    position: "absolute",
                    top: "50%",
                  }}
                />
              </div>
              <div
                className="circle"
                style={{
                  width: "5vh",
                  height: "5vh",
                  backgroundColor: "black",
                  borderRadius: "100%",
                  marginLeft: "1vh",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Linkedin
                  style={{
                    transform: "translateY(-50%)",
                    position: "absolute",
                    top: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <a href="#home">
          <Home className={styles.icons} />
          Home
        </a>

        <a href="#Resume">
          <StickyNote className={styles.icons} />
          Resume
        </a>
        <a href="#projects">
          <ClipboardCheck className={styles.icons} />
          Projects
        </a>
        <a href="#Contact">
          <Contact className={styles.icons} />
          Contact
        </a>
      </div>

      {/* main content  */}

      <div className={styles.content} id="home">
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
          Welcome to my personal portfolio website I am a passionate and skilled
          front-end web developer with a wealth of experience in creating
          captivating and interactive websites. With a keen eye for design and a
          knack for transforming ideas into fully functional digital experiences
          &sbquo; I take pride in crafting user-friendly interfaces that leave a
          lasting impression. Here &sbquo; you&apos;ll find a showcase of my
          diverse projects &sbquo; highlighting my expertise in HTML &sbquo; CSS
          &sbquo; JavaScript &sbquo; and other cutting-edge technologies. Join
          me on this digital journey as I invite you to explore the innovative
          world of web development through my work. Let&apos;s collaborate and
          turn your visions into reality
        </p>

        <div className="projects mt-5 " id="projects">
          <div className={styles.row}>
            <h3 className="ms-3 mb-3">Projects</h3>
            <a href="https://shopping-store-d4s4.vercel.app/" target="_blank">
              <div className={styles.column}>
                <div className={styles.card}>
                  <Image
                    src="/images/amazon2.svg"
                    width={200}
                    height={110}
                    alt="amazon"
                  />
                </div>
                <div className="mt-2 ms-2" style={{ color: "black" }}>
                  {" "}
                  e-Commerce
                </div>
              </div>
            </a>

            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/ToDO2.svg"
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
                  src="/images/news2.svg"
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
                  src="/images/texteditor2.svg"
                  width={150}
                  height={110}
                  alt="texteditor"
                />
              </div>
              <div className="mt-2 ms-2"> TextUtils</div>
            </div>
          </div>
        </div>
        <div className="cards in line mt-5">
          <h3>Frontend</h3>

          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/HTMLCSS2.svg"
                  width={100}
                  height={110}
                  alt="htmlcss"
                />
              </div>
              <div className="mt-2 ms-2"> HTML&sbquo; CSS</div>
            </div>

            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/bootstrap3.svg"
                  width={150}
                  height={110}
                  alt="bootstrap"
                />
              </div>
              <div className="mt-2 ms-2"> Bootstrap</div>
            </div>

            <div className={styles.column}>
              <div className={styles.card}>
                <Image
                  src="/images/tsJs2.svg"
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
                  src="/images/react1.svg"
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
                  src="/images/nextjs2.svg"
                  width={190}
                  height={110}
                  alt="nextjs"
                />
              </div>
              <div className="mt-2 ms-2"> Nextjs</div>
            </div>
          </div>
        </div>

        <div className="tools" style={{ marginTop: "3vh" }}>
          <h3>Others</h3>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.card}>
              <Image
                  src="/images/github1.svg"
                  width={250}
                  height={110}
                  alt="github"
                />

              </div>
                              <div className="mt-2 ms-2"> Github</div>
            </div>
            <div className={styles.column}>
              <div className={styles.card}>
              <Image
                  src="/images/git2.svg"
                  width={200}
                  height={110}
                  alt="git"
                />

              </div>
                              <div className="mt-2 ms-2"> Git</div>
            </div>
            <div className={styles.column}>
              <div className={styles.card}>
              <Image
                  src="/images/gitlab1.svg"
                  width={200}
                  height={110}
                  alt="gitlab"
                />

              </div>
                              <div className="mt-2 ms-2"> Gitlab</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
