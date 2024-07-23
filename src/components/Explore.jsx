import React from "react";

const Explore = () => {
  return (
    <div>
      <section id="explore">
        <div className="container">
          <div className="row row__column">
            <h2>
              Exployer more <span className="purple">Books</span>
            </h2>
            <a href="/books">
              <button className="btn">Explore books</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
