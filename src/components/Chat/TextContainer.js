import React from 'react';

import onlineIcon from '../../Assets/icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Therapy Chat<span role="img" aria-label="emoji">💬</span></h1>
      <h2>Criado com React, Express, Node e Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Experimente agora mesmo!<span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Pessoas conversando:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;