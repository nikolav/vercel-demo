// import Head from 'next/head'
// import Image from 'next/image'
import styles from "../styles/Home.module.css";

import qs from "qs";
import axios from "axios";

export default function Home(props) {
  const handle01 = (evt) => {
    console.dir(evt);
  };
  const handle02 = (evt) => {
    axios({
      method: "post",
      url: "/api/register",
      data: qs.stringify({
        name: "nikolav",
        email: "admin@nikolav.rs",
      }),
      responseType: "json",
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <div className="container-md">
        <div className="row">
          <div className="col">
            <h1 className="display-1">Home</h1>
            <p className="lead">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              perferendis dolorem consequuntur nemo. Corporis molestias esse,
              reiciendis neque veritatis quod ratione autem alias cum nesciunt
              fuga nam quidem sequi commodi, non, eveniet consequuntur earum
              omnis facilis aliquam inventore beatae excepturi fugit saepe. Quam
              natus veritatis totam quod minima deserunt repudiandae quis sit,
              beatae ipsam expedita.
            </p>
          </div>
        </div>

        <div className="mt-md-4 row">
          <div className="col d-flex justify-content-center justify-content-md-end">
            <div className="btn-group --btn-group-sm">
              <button
                onClick={handle02}
                type="button"
                className="btn btn-outline-primary"
              >
                check
              </button>
              <button type="button" className="btn btn-outline-dark">
                show
              </button>
              <button type="button" className="btn btn-outline-dark">
                hide
              </button>
              <button type="button" className="btn btn-outline-danger">
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
