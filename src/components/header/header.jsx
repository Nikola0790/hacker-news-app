import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <div className="container headColor">
        <div className="row">
          <div className="col-12">
            <nav className="navbar ">
              <h1>Hacker News</h1>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
