import React from "react";
import { Link } from "react-router-dom";
import Club from "../components/Club";
import { Clublist } from "../helpers/Clublist";

import "../styles/Clubs.css";

function Clubs() {
  return (
    <div className="clubs">
      <div className="clubs-list">
        {Clublist.map((club, key) => {
          return (
            
              <Club
                key={club.id}
                img={club.img}
                name={club.name}
                location={club.location}
                cups={club.cups}
                link = {club.link}
              />
          
          );
        })}
      </div>
    </div>
  );
}

export default Clubs;
