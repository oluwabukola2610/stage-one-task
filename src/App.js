import React from "react";
import ProfileImage from "./images/IMG_E5718 (2).JPG";
import Slack from "./images/slack-new.png";
import Github from "./images/Icon (1).png";
import Ingresive from "./images/I4G.svg";
import Zuri from "./images/Vector (1).png";
import Link from "./images/Icon (2).png";
// import FiCamera from "./images/Icon (4).png";
// import BiDotsHorizontalRounded from "./images/Icon (3).png";
import "./index.css";

function App() {
  const buttons = [
    {
      linkName: "Twitter Link",
      href: "https://mobile.twitter.com/M_Roheemoh",
      id: "twitter",
    },
    {
      linkName: "Zuri Team",
      href: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      linkName: "Zuri Books",
      href: "http://books.zuri.team",
      id: "books",
    },
    {
      linkName: "Python Books",
      href: "https://books.zuri.team/python-for-beginners?ref_id=drdonice",
      id: "book__python",
    },
    {
      linkName: "Background Check for Coders",
      href: "https://background.zuri.team,",
      id: "pitch",
    },
    {
      linkName: "Design Books",
      href: "https://books.zuri.team/design-rules ",
      id: "book__design",
    },
  ];

  return (
    <div className="App">
      <div>
        <div className="rightDesktop hidden md:block w-10 h-10 mt-4 mr-6 font-bold border-2 border-dashed rounded-full md:mr-20 hover:bg-gray-200">
          <img src={Link} alt="icon" />
        </div>
        <div className="rightMobile block md:hidden w-10 h-10 mt-4 mr-6 font-bold border-2 border-dashed rounded-full md:mr-20">
          {/* <BiDotsHorizontalRounded /> */}
        </div>
      </div>

      <div className="container w-30 flex flex-col sm-auto justify-center items-center">
        <img
          src={ProfileImage}
          alt="Profile"
          id="profile__img"
          className="img mt-8 w-24 rounded-full border-sky-500 md:w-28 md:hover:brightness-50"
        />
        <div class="overlay">
          <a href="www.ghjk" class="icon">
            {/* <FiCamera /> */}
          </a>
        </div>
      </div>

      <p id="slack" style={{ display: "none" }}>
        M_Roheemoh
      </p>
      <h1 className="text-2xl py-4 font-bold">Mudashir Roheemoh.O</h1>

      <div className="w-full md:w-3/5">
        {buttons.map((button) => (
          <div className="bg-gray-200 rounded-lg text-sm p-5 my-5 drop-shadow-[0_15px_25px_rgba(0,0,0,0.02)] hover:drop-shadow-md hover:bg-gray-300">
            <a href={button.href} id={button.id}>
              {button.linkName}
            </a>
          </div>
        ))}
      </div>

      <div className="flex">
        <a href="https://">
          <img
            src={Slack}
            alt="slack"
            className="w-8 rounded-full border-sky-500 m-2"
          />
        </a>
        <a href="https://github.com/oluwabukola2610" id="github">
          <img
            src={Github}
            alt="github"
            className="w-8 rounded-full border-sky-500 m-2"
          />
        </a>
      </div>

      <div className="border w-full mt-8"></div>

      <footer className="my-8 w-full text-left md:flex md:space-x-64 md:justify-center md:align-middle">
        <img src={Zuri} alt="zuri" className="w-30 border-sky-500 mb-2" />
        <span className="text-gray-500 mb-2">
          HNG Internship 9 Frontend Task
        </span>
        <img
          src={Ingresive}
          alt="IG4"
          className="w-28 border-sky-500 mt-2 md:w-28"
        />
      </footer>
    </div>
  );
}

export default App;
