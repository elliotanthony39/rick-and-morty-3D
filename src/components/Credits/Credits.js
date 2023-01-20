import React from "react";
import "../../styles/Credits.css";
import { rotateRoom } from "../Scene/Script";

function Credits({ setLoad }) {
  const handleAnimation = () => {
    setLoad(false);
    rotateRoom();
  };

  return (
    <div className="container credits-main">
      <div className="d-flex flex-column justify-content-center">
        <div className="credits-model text-white">
          <h1>Garage Model 3D</h1>
          <p>
            <strong>
              garage "Rick and Morty Garage (Fan Art)" (
              <a
                href="https://skfb.ly/6UIYV"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://skfb.ly/6UIYV
              </a>
              ) by Mumladze28 is licensed under Creative Commons Attribution (
              <a
                href="http://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://creativecommons.org/licenses/by/4.0/
              </a>
              ).
            </strong>
          </p>
          <button className="btn btn-success" onClick={handleAnimation}>
            See Characters
          </button>
        </div>
        <div className="credits-model text-white">
          <h1>Project Developed By</h1>
          <h3>
            Elliot Anthony Madariaga Huarcaya{" "}
            <a
              href="https://github.com/elliotanthony39"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </h3>
          <p>
            <strong>
              This is a project that consumes the{" "}
              <a
                href="https://rickandmortyapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                rick and morty api.
              </a>
              <a
                href="https://github.com/elliotanthony39/rick-and-morty-3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <br />
                Repository Link
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Credits;
