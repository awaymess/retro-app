import React, { useEffect, useState } from "react";
import axios from "axios";
// import styled from "styled-components";
import logo from "../public/instagram-logo-2022_freelogovectors.net_.png";
import Image from "next/image";

export default function Post() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [name, setName] = useState("away");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    Poster();
    // sendPostRequest();
  }, []);

  if (isLoading)
    return (
      <div className="large-indicator">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  if (!data) return <p>No profile data</p>;

  const Poster = async () => {
    setLoading(true);
    try {
      const resp = await axios.get("http://localhost:4000/poster");
      // console.log(resp.data);
      setData(resp.data);
      setLoading(false);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      name: name,
      location: location,
      picture: [
        {
          name: name,
        },
      ],
      comments: [
        {
          name: name,
          comment: comment,
        },
      ],
    };
    fetch("http://localhost:4000/poster/create-poster", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/";
        }
      });
  };
  // var savetime = new Date(year, month, day, hour, minute, second, millisecond);

  const sendPostRequest = async (e) => {
    e.preventDefault();
    var data = {
      name: name,
      location: location,
      date: Date.now(),
      picture: [
        {
          name: "https://thumbs.dreamstime.com/b/smooth-nature-pic-full-hd-126695318.jpg",
        },
      ],
      comments: [
        {
          name: name,
          comment: comment,
          date: Date.now(),
        },
      ],
      // like: [
      //   {
      //     name: "Unlike",
      //     status: 0,
      //     checkinEnabled: false,
      //   },
      // ],
    };

    try {
      const resp = await axios.post(
        "http://localhost:4000/poster/create-poster",
        data
      );
      console.log(resp.data);
      window.location.href = "/";
      // Poster();
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <>
      <style>
        {`
    
    .post{
      width: 100%;
      height: auto;
      background: #fff;
      border: 1px solid #dfdfdf;
      margin-top: 10px;
      margin-bottom: 20px;
  }

  
  .post-image{
      width: 100%;
      height: 500px;
      object-fit: cover;
      
  }
  
  .post-content{
      width: 100%;
      padding: 20px;
  }
  
  
  .comment-wrapper{
      width: 100%;
      height: 50px;
      border-radius: 1px solid #dfdfdf;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  .comment-wrapper .icon,.ic{
      height: 30px;
      padding-left: 12px;
      padding-right: 12px;
  }
  
  .comment-box{
      width: 80%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 14px;
  }
  
  .comment-btn{
      width: 70px;
      height: 100%;
      background: none;
      border: none;
      outline: none;
      text-transform: capitalize;
      font-size: 16px;
      color: rgb(0, 162, 255);
      // opacity: 0.5;
  }
  
  .reaction-wrapper{
      width: 100%;
      height: 50px;
      display: flex;
      margin-top: -40px;
      align-items: center;
  }
  
  
  .reaction-wrapper .icon.save{
      margin-left: auto;
      margin-right: 4px;

  }
  textarea {
    width: 100%;
    // height: 50px;
    // box-sizing: border-box;
    // border: 2px solid #ccc;
    // border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
  }

  .topNoti{
    padding-top: 24px;
  }

  @media screen and (max-width: 700px) {
    .topNoti {
      display: flex;
      padding-top: 72px;
      
      }
    
  }
  `}
      </style>

      <div className="content ">
        <div className="wrapper topNoti">
          <div className="left-col">
            {/* // status wrappers */}
            <form onSubmit={sendPostRequest}>
              <div className="post">
                <Image src={logo} className="post-image" alt="" />
                <div className="comment-wrapper">
                  <i className="ic bi bi-emoji-sunglasses"></i>

                  <textarea
                    type="text"
                    className="comment-box"
                    placeholder="Description"
                    onChange={(e) => setComment(e.target.value)}
                  />

                  <p className="comment-btn"></p>
                </div>
                <div className="comment-wrapper">
                  <i className="ic bi bi-geo-alt"></i>

                  <input
                    type="text"
                    className="comment-box"
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                  />

                  <button className="comment-btn" type="submit">
                    Share
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
