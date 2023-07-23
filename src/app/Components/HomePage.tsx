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
            style={{ borderRadius: "100%", marginTop: "2vh" }}
          />
          <div
            className="socialMedia"
            style={{
              width: "100%",
              height: "4vh",
              backgroundColor: "red",
              marginBottom: "2vh",
            }}
          >
            <div
              className="icons"
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: "white",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {/* icons here */}
            </div>
          </div>
        </div>
        <a className="active" href="#home">
          <HomeOutlinedIcon style={{ marginRight: "1vh" }} />
          Home
        </a>

        <a href="#Resume">
          <DescriptionOutlinedIcon style={{ marginRight: "1vh" }} />
          Resume
        </a>
        <a href="#Projects">
          {" "}
          <TaskOutlinedIcon style={{ marginRight: "1vh" }} />
          Projects
        </a>
        <a href="#Contact">
          {" "}
          <ContactsOutlinedIcon style={{ marginRight: "1vh" }} />
          Contact
        </a>
      </div>

      <div className={styles.content}>
        <h2>Responsive Sidebar Example</h2>
        <p>
          This example use media queries to transform the sidebar to a top
          navigation bar when the screen size is 700px or less.
        </p>
        <p>
          We have also added a media query for screens that are 400px or less,
          which will vertically stack and center the navigation links.
        </p>
        <h3>Resize the browser window to see the effect.</h3>
      </div>
    </>
  );
}

export default HomePage;
