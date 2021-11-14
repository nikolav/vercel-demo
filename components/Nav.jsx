import React from "react";
import Link from "next/link";

const Nav = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">NextBS</a>
          </Link>
          <button
            className="navbar-toggler d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#_1"
            aria-controls="_1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="_1">
            <ul className="mt-2 navbar-nav ms-auto mt-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">
                    Home <span className="visually-hidden">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/comments">
                  <a className="nav-link">
                    Comments <span className="visually-hidden">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">
                    About <span className="visually-hidden">(current)</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
