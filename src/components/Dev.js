import React from "react";
import "./dev.css";

const Dev = () => {
  function Card(props) {
    return (
      <div className="devv1">
        <h2>{props.name}</h2>
        <h2>{props.contribution}</h2>
      </div>
    );
  }
  return (
    <div className="dev1">


      <br />
      <div className="person1">
        <Card
          className="card1"
          name="Dr.Zubair Ahmad Shah"
          contribution="Supervisor"
        />
        Assistant Professor Department of CSE IUST,KASHMIR
        {
          <a href="mailto:zubair.shah@islamicuniversity.edu.in">
            &nbsp;<i className="icon fa-solid fa-message"></i>
          </a>
        }
      </div>
      <hr />
      <div className="person2">
        <Card
          className="card1"
          name="Sadaf Shafi"
          contribution="Team Leader"
        />
        <h3>
          Student , Department of CSE &nbsp;
          <br />
          {
            <a href="https://github.com/sadafshafi">
              <i className="icon fa-brands fa-github"></i>
            </a>
          }
          {
            <a href="https://www.linkedin.com/in/sadaf-shafi-4a05b646/">
              <i className="icon fa-brands fa-linkedin"></i>
            </a>
          }
        </h3>
      </div>
      <hr />
      <div className="person3">
        <Card
          className="card1"
          name="Mohammad Amman Ul Haq"
          contribution="Front-End Developer"
        />
        <h3>
          Student , Department of CSE &nbsp;
          <br />
          {
            <a href="https://github.com/Amman30">
              <i className="icon fa-brands fa-github"></i>
            </a>
          }
          {
            <a href="https://www.linkedin.com/in/mohammad-amman-5378ab20a">
              <i className="icon fa-brands fa-linkedin"></i>
            </a>
          }
        </h3>
      </div>
      <div className="person3">
        <Card
          className="card1"
          name="Tabeed Hameed Ahangar"
          contribution="Back-End Developer"
        />
        <h3>
          Student , Department of CSE &nbsp;
          <br />
          {
            <a href="https://github.com/Tabeed-H">
              <i className="icon fa-brands fa-github"></i>
            </a>
          }
          {
            <a href="https://www.linkedin.com/in/tabeed-hameed-ahangar-26491b1ba/">
              <i className="icon fa-brands fa-linkedin"></i>
            </a>
          }
        </h3>
      </div>
      <div className="person4">
        <Card
          className="card1"
          name="Zaid Rafi Dento"
          contribution="Front-End Developer"
        />
        <h3>
          Student , Department of CSE &nbsp;
          <br />
          {
            <a href="https://github.com/dento65">
              <i className="icon fa-brands fa-github"></i>
            </a>
          }
        </h3>
      </div>

    </div>
  );
};

export default Dev;
