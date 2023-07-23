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
        <div
          style={{ width: "100%", backgroundColor: "", textAlign: "center" }}
        >
          <Image
            src="/images/myimg.png"
            width={110}
            height={110}
            alt="Picture of the author"
            style={{ borderRadius: "100%", marginTop: "2vh" ,imageResolution:"from-image 300dpi"}}
          />
          <div
            className="socialMedia"
            style={{
              width: "100%",
              height: "4vh",
              // backgroundColor: "red",
              marginBottom: "2vh",
              marginTop: "3vh",
            }}
          >
            <div
              className="icons"
              style={{
                width: "70%",
                height: "100%",
                // backgroundColor: "white",
                marginLeft: "auto",
                marginRight: "auto",
                // justifyContent:"space-between"
              }}
            >
              {/* icons here */}
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
          {" "}
          <TaskOutlinedIcon className={styles.icons} />
          Projects
        </a>
        <a href="#Contact">
          {" "}
          <ContactsOutlinedIcon className={styles.icons} />
          Contact
        </a>
      </div>

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
          <h6>HI THERE! I'M</h6>
          <h1>AVI PAWAR</h1>
          <h5>
            A{" "}
            <span style={{ color: "rgb(61 203 203)" }}>
              {" "}
              Front-End Web Developer{" "}
            </span>{" "}
            passionate about creating interactive applications and experiences
            on the web.
          </h5>
        </div>
      </div>
    </>
  );
}

export default HomePage;
