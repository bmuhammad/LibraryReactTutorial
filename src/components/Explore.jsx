import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div>
      <section id="explore">
        <div className="container">
          <div className="row row__column">
            <h2>
              Exployer more <span className="purple">Books</span>
            </h2>
            <Link to="/books">
              <button className="btn">Explore books</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
