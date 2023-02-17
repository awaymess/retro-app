import React, { useEffect, useState } from "react";
import axios from "axios";
// import styled from "styled-components";
import logo from "../public/instagram-logo-2022_freelogovectors.net_.png";
import Image from "next/image";
// import dayjs from "dayjs";
import base64 from "base-64";

export default function Post() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);
  // const [name, setName] = useState("away");

  const [comments, setComment] = useState({
    name: "away",
    comment: "",
  });

  const [likes, setlikes] = useState({
    name: "away",
  });

  // function cammentChangeValue(e) {
  //   const { name, value } = e.target;
  //   console.log(value);
  //   setAddUsers((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // }

  useEffect(() => {
    Posts();
    Profile();
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

  // const Poster = async () => {
  //   setLoading(true);
  //   try {
  //     const resp = await axios.get("http://localhost:3001/api/v2/getPost");
  //     console.log(resp.data.data);
  //     setData(resp.data.data);
  //     // setData(resp.data.date);

  //     var d = Date(Date.now());
  //     var a = d.toString();
  //     console.log(a);

  //     setLoading(false);
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // };

  const Profile = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get("http://localhost:3001/api/v2/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log(resp.data.data);
      // console.log(resp);
      // Convert response to an array if it is not already an array
      const dataArray = Array.isArray(resp.data.data)
        ? resp.data.data
        : [resp.data.data];
      setProfile(dataArray);

      // var d = Date(Date.now());
      // var a = d.toString();
      // console.log(a);

      setLoading(false);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const Posts = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get("http://localhost:3001/api/v2/posts", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log(resp.data.data);
      // console.log(resp);
      // Convert response to an array if it is not already an array
      const dataArray = Array.isArray(resp.data.data)
        ? resp.data.data
        : [resp.data.data];
      setData(dataArray);

      setLoading(false);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const sendComment = async (e) => {
    // e.preventDefault();

    var data = {
      id: e._id,
      comments: [
        {
          name: comments.name,
          comment: comments.comment,
        },
      ],
    };

    try {
      const resp = await axios.put(
        "http://localhost:3001/api/v2/getPost",
        data
      );

      window.location.href = "/";
      // Poster();
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const sendLike = async (e) => {
    // e.preventDefault();
    var data = {
      id: e._id,
      like: [
        {
          name: likes.name,
          status: 1,
          checkinEnabled: true,
        },
      ],
    };

    try {
      const resp = await axios.put("http://localhost:4000/poster/like", data);
      // window.location.href = "/";
      // Poster();
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const sendUnLike = async (e) => {
    // e.preventDefault();
    // console.log(e)
    var data = {
      id: e._id,
      name: likes.name,
    };
    // console.log(data);

    try {
      const resp = await axios.put(
        "http://localhost:4000/poster/del-like",
        data
      );
      // window.location.href = "/";
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  // var newArray = data.filter(function (el) {
  //   return el.like ;
  // });
  // console.log(newArray);

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
      margin-top: -40px;
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
              {/* onClick={() => UpdateUser(user.id)}> */}

              <div className="post">
                <div className="info">
                  <div className="user">
                    <div className="profile-pic">
                      <Image src={logo} alt="" />
                    </div>
                    <p className="username"> {item.Uid}</p>
                  </div>
                  <i className="bi bi-three-dots save icon"></i>

                  {/* <img src="img/option.PNG" className="options" alt="" /> */}
                </div>

                {/* <img src={`data:image/jpeg;base64,${item.Picture}`} /> */}
                {/* <Image
                  src={`data:image/jpeg;base64,${item.Picture}`}
                  className={"post-image"}
                  alt=""
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  // zindex={-500}
                /> */}

                <p className="description" key={index}>
                    <span>{index} </span>
                    {item.Comment}
                  </p>

                <Image src={item.picture} className="post-image" alt="" />
                <div className="post-content">
                  <p>{likes.name}</p>
                  <div className="reaction-wrapper">
                    <>
                      <p>{index}</p>
                      {/* {item.like.includes(likes.name) ? <p>1</p> : <p>2</p>} */}
                    </>

                    {/* <>
                      {data.filter((item) => item.like.toString() === "away")
                        .length < 0 ? (
                        <p>true</p>
                      ) : (
                        <p>false</p>
                      )}
                    </> */}

                    {/* {data.filter(item: (name: never) => unknown, thisArg?: any)} */}

                    {/* <>
                      {data.filter((item) => item.like.toString() === "away")
                        .length < 0 ? (
                        <p>true</p>
                      ) : (
                        <p>false</p>
                      )}
                    </> */}
                    {/* {item.Uid == 0 ? (
                      <button
                        className="comment-btn"
                        onClick={() => sendLike(item)}
                        type="submit"
                      >
                        like
                      </button>
                    ) : (
                      <button
                        className="comment-btn"
                        onClick={() => sendUnLike(item)}
                        type="submit"
                      >
                        Unlike
                      </button>
                    )} */}

                    {/* {item.like.map((like) => (
                      <>
                        {like.name != null ? (
                          <button
                            className="comment-btn"
                            onClick={() => sendUnLike(item)}
                            type="submit"
                          >
                            Unlike
                          </button>
                        ) : (
                          <button
                            className="comment-btn"
                            onClick={() => sendLike(item)}
                            type="submit"
                          >
                            like
                            {like.name}
                          </button>
                        )}
                      </>
                    ))} */}

                    {/* <button
                      className="comment-btn"
                      onClick={() => sendUnLike(item)}
                      type="submit"
                    >
                      Unlike
                    </button> */}
                    {/* {item.like[0].name}
                    <button
                      className="comment-btn"
                      onClick={() => sendLike(item)}
                      type="submit"
                    >
                      like
                    </button>

                     {item.like.includes(likes.name) ? (
                      <button
                        className="comment-btn"
                        onClick={() => sendUnLike(item)}
                        type="submit"
                      >
                        Unlike
                        <i className="bi bi-heart icon">Like</i>
                      </button>
                    ) : (
                      <button
                        className="comment-btn"
                        onClick={() => sendLike(item)}
                        type="submit"
                      >
                        like
                        <i className="bi bi-heart icon">Unlike</i>
                      </button>
                    )} */}

                    <i className="bi bi-heart icon"></i>

                    <i className="bi bi-chat icon"></i>

                    <i className="bi bi-send icon"></i>

                    <i className="bi bi-bookmark save icon"></i>

                    <img src="img/like.PNG" className="icon" alt="" />
                    <img src="img/comment.PNG" className="icon" alt="" />
                    <img src="img/send.PNG" className="icon" alt="" />
                    <img src="img/save.PNG" className="save icon" alt="" />
                  </div>
                  <p className="likes">{index} likes</p>
                  <p className="test">{index} tets</p>
                  {/* {item.comments.map((comment, index) => (
                    <p className="description" key={index}>
                      <span>{comment.name} </span>
                      {comment.comment}
                    </p> */}
                  ))}
                  {/* <p className="post-time">
                    {dayjs(Date(item.date)).format("DD MMM YYYY H:mma")}
                  </p> */}
                  <p className="post-time">2 minutes ago</p>
                </div>

                <div className="comment-wrapper">
                  <Image src={logo} className="icon" alt="" />
                  <i className="bi bi-heart icon"></i>
                  <i className="ic bi bi-emoji-sunglasses"></i>

                  <input onChange={() => setId(item.id)}></input>

                  <input
                    type="text"
                    className="comment-box"
                    placeholder="Add a comment"
                    onChange={(e) =>
                      setComment({ ...comments, ["comment"]: e.target.value })
                    }
                  />

                  <button
                    className="comment-btn"
                    onClick={() => sendComment(item)}
                    type="submit"
                  >
                    post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
