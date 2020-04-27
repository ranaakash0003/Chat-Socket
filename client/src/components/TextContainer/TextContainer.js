import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./textContainer.css";

const TextContainer = ({ users }) => (
  <div className="text-container">
    <div>
      <h1>
       A  Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬 🙂
        </span>
      </h1>
      <h2>
        Using React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      {/* <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2> */}
    </div>
    {users ? (
      <div>
        <h1>Online:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <img alt="Online Icon" src={onlineIcon} /> &nbsp;
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
