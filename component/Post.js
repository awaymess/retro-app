import React, { useEffect, useState } from "react";
import axios from "axios";

// import styled from "styled-components";
import logo from "../public/instagram-logo-2022_freelogovectors.net_.png";
import Image from "next/image";

export default function Post() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Poster();
    
    // sendPostRequest();
  }, []);
  const Poster = async () => {
    try {
      const resp = await axios.get("http://localhost:4000/poster");
      // console.log(resp.data);
      setData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const newPosts = {
    // userId: 1,
    // title: "A new post",
    // body: "This is the body of the new post",
    name: "tesrtet4",
    like: [
      {
        name: "winrwe2",
        status: 1,
        checkinEnabled: true,
      },
      {
        name: "winrwe2",
        status: 0,
        checkinEnabled: false,
      },
      {
        name: "winrwe2",
        status: 1,
        checkinEnabled: true,
      },
      {
        name: "winrwe2",
        status: 0,
        checkinEnabled: false,
      },
    ],
    comments: [
      {
        name: "winrwe2",
        comment: "ytestr1",
      },
      {
        name: "winrwe2",
        comment: "ytestr1",
      },
      {
        name: "winrdrtghdfgfdsgwe2",
        comment: "ytesdfgdfgdfgdfgdfgtr1",
      },
    ],
  };

  const sendPostRequest = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:4000/poster/create-poster",
        newPosts
      );
      // console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
    Poster();
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
  
  .info{
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
  }
  
  .info .username{
      width: auto;
      font-weight: bold;
      color: #000;
      font-size: 14px;
      margin-left: 10px;
  }
  
  .info .options{
      height: 10px;
      cursor: pointer;
  }
  
  .info .user{
      display: flex;
      align-items: center;
  }
  
  .info .profile-pic{
      height: 40px;
      width: 40px;
      padding: 0;
      background: none;
  }
  
  .info .profile-pic image{
      border: none;
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
  
  .likes{
      font-weight: bold;
  }
  
  .description{
      margin: 10px 0;
      font-size: 14px;
      line-height: 20px;
  }
  
  .description span{
      font-weight: bold;
      margin-right: 10px;
  }
  
  .post-time{
      color: rgba(0, 0, 0, 0.5);
      font-size: 12px;
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
      margin-top: -20px;
      align-items: center;
  }
  
  .reaction-wrapper .icon{
      height: 25px;
      margin: 0;
      margin-right: 20px;
      
      
  }
  
  .reaction-wrapper .icon.save{
      margin-left: auto;
      margin-right: 4px;

  }`}
      </style>

      {data.map((item, index) => (
        
        <div className="content" key={index}>
          <div className="wrapper">
            <div className="left-col">
              {/* // status wrappers */}
              <div className="post">
                <div className="info">
                  <div className="user">
                    <div className="profile-pic">
                      <Image src={logo} alt="" />
                    </div>
                    <p className="username"> {item.name}</p>
                  </div>
                  <i className="bi bi-three-dots save icon"></i>

                  {/* <img src="img/option.PNG" className="options" alt="" /> */}
                </div>

                <Image src={logo} className="post-image" alt="" />
                <div className="post-content">
                  <div className="reaction-wrapper">
                    <i className="bi bi-heart icon"></i>

                    <i className="bi bi-chat icon"></i>

                    <i className="bi bi-send icon"></i>

                    <i className="bi bi-bookmark save icon"></i>

                    {/* <img src="img/like.PNG" className="icon" alt="" />
                  <img src="img/comment.PNG" className="icon" alt="" />
                  <img src="img/send.PNG" className="icon" alt="" />
                  <img src="img/save.PNG" className="save icon" alt="" /> */}
                  </div>
                  <p className="likes">{item.like.length} likes</p>
                  {item.comments.map((comment, index) => (
                    <p className="description" key={index} >
                      <span>{comment.name} </span>
                      {comment.comment}
                    </p>
                  ))}
                  <p className="post-time">2 minutes ago</p>
                </div>

                <div className="comment-wrapper">
                  {/* <Image src={logo} className="icon" alt="" /> */}
                  {/* <i className="bi bi-heart icon"></i> */}
                  <i className="ic bi bi-emoji-sunglasses"></i>

                  <input
                    type="text"
                    className="comment-box"
                    placeholder="Add a comment"
                  />
                  <button className="comment-btn">post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
