import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack ⌘💪💻", 'Vue Js Dev Ⓥ ☢️🌐', "Front-End 🛠🔴", "React Js Dev 🕶 ☠📱"]
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/8.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="icons">
            <a href="google.com">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="google.com">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zied-rjeb-2b42311bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="google.com">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="google.com">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <h2>Hi there </h2>
          <h1>Zied RJEB</h1>
          <h3>Web Developper <span ref={textRef}> </span></h3>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="Zied.pdf" download="Rjeb Zied.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <a className="arrow" href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
