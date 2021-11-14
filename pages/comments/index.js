import React, { useState } from "react";
import { useRouter } from "next/router";

import QueryString from "qs";
import axios from "axios";

const Comments = (props) => {
  const [comment, setComment] = useState({
    name: "",
    comment: "",
  });
  const router = useRouter();

  const handleInputChange = (evt) => {
    setComment((state_) => {
      return {
        ...state_,
        [evt.target.name]: evt.target.value,
      };
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (comment.comment.trim().length) {
      axios({
        method: "post",
        url: "/api/register",
        data: QueryString.stringify(comment),
        responseType: "json",
      }).then((res) => {
        console.log(res.data);
        setComment({ name: "", comment: "" });
        // router.push("/");
      });
    }
    return false;
  };

  return (
    <>
      <div className="container-md">
        <div className="row">
          <div className="col">
            <h1 className="display-1">Comments</h1>
            <p className="lead">Lorem, ipsum dolor.</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores accusantium quibusdam maxime odit consectetur iusto
              quod labore temporibus. Repudiandae modi facilis quidem eum illum
              tenetur qui iure ratione illo nihil? Esse et velit cupiditate
              suscipit molestias perferendis voluptas iusto pariatur! Voluptatum
              velit adipisci consectetur corrupti ad autem dolorum delectus,
              quaerat perferendis facere eaque culpa blanditiis.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-10 offset-md-1">
            <h2 className="text-center display-5">Leave a comment</h2>
            <form onSubmit={handleSubmit} className="p-4 mt-4">
              <div className="mb-3">
                <label htmlFor="yqm4" className="form-label">
                  Name/Email 
                </label>
                <input
                  type="text"
                  name="name"
                  id="yqm4"
                  className="form-control"
                  onChange={handleInputChange}
                  value={comment.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="1qzv" className="form-label">
                  Comment *
                </label>
                <textarea
                  className="form-control"
                  name="comment"
                  id="1qzv"
                  rows="5"
                  value={comment.comment}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="p-2 px-5 btn btn-outline-dark d-inline-block"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
