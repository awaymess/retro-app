import React, { useEffect, useState } from "react";
import axios from "axios";
// import styled from "styled-components";
import logo from "../public/instagram-logo-2022_freelogovectors.net_.png";
import Image from "next/image";
import dayjs from "dayjs";
import et from "../public/empty.png";

export default function Post() {
  const url_v1 = process.env.NEXT_PUBLIC_API_URL_V1;
  const url_v2 = process.env.NEXT_PUBLIC_API_URL_V2;
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);
  const [id, setID] = useState("");
  const [postes, setPostes] = useState("");
  const [comments, setComment] = useState("");

  const [like, setLike] = useState("");
  const [liked, setLiked] = useState("");

  const [isClicked, setIsClicked] = useState(true);

  const [myLike, setMyLike] = useState([]);

  useEffect(() => {
    Posts();
    Profile();
    setLoading(true);
    Getlike();
    GetlikeAll();
    // sendPostRequest();
  }, []);

  const handleClickLike = (e) => {
    setIsClicked(!isClicked);
    let like = +isClicked;
    let likedata = {
      Status: like.toString(),
      Name: e.id.toString(),
    };

    console.log(likedata);

    const token = localStorage.getItem("token");
    axios
      .post(url_v2 + "like", likedata, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        GetlikeAll();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const buttonStyle = {
  //   backgroundColor: "#fff",
  //   color: isClicked ? "black" : "#e2264d",
  //   padding: "12px 20px 10px 10px",
  //   borderRadius: "5px",
  //   border: "none",
  //   cursor: "pointer",
  // };

  if (isLoading)
    return (
      <div className="large-indicator">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  // if (!data) return <p>No profile data</p>;

  const Profile = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get(url_v2 + "profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (err) {
      if (err.response.status === 401) {
        window.location.href = "/login";
      }
      // Handle Error Here
      console.error(err.response.status);
      console.error(err);
    }
    setLoading(false);
  };

  const Posts = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get(url_v2 + "posts", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // const dataArray = Array.isArray(resp.data.data)
      //   ? resp.data.data
      //   : [resp.data.data];
      // setData(resp.data.data);
      console.log(resp.data.data);
      setData(resp.data.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  function Getlike() {
    let liked = {
      post: "6",
    };
    console.log("liked", liked.toString());

    const token = localStorage.getItem("token");

    axios
      .post(url_v2 + "likePost", liked, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      // setLikes
      .then((response) => {
        // console.log(response.data.data.status);
        setLike(response.data.data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function GetlikeAll() {
    console.log("liked", liked.toString());

    const token = localStorage.getItem("token");

    axios
      .get(url_v2 + "likePost", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      // setLikes
      .then((response) => {
        // console.log("response.dataAllLike", response.data.data);
        setMyLike(response.data.data ? response.data.data : []);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let Delpost = {
    id: id,
  };
  function DelPost(e) {
    // e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(url_v2 + "Delpost", Delpost, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  let Commented = {
    Fullname: postes,
    Comment: comments.comment,
  };

  function Comments(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(url_v2 + "comment", Commented, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div className="content" key={index}>
            <div>
              <div className="wrapper">
                <div className="left-col">
                  <div className="post">
                    <div className="info">
                      <div className="user">
                        <div className="profile-pic">
                          {!item.Profile ? (
                            <Image
                              src={`data:image/jpeg;base64,${item.profile}`}
                              className={"post-image"}
                              alt=""
                              layout="responsive"
                              width="100%"
                              height="100%"
                            />
                          ) : (
                            <Image src={logo} alt="" />
                          )}
                        </div>
                        <p className="username">{item.Fullname}</p>
                      </div>
                      {/* <img src="img/option.PNG" className="options" alt="" /> */}
                      {/* <i className="bi bi-three-dots save icon"></i> */}

                      <div className="btn-group dropstart">
                        <i
                          className="bi bi-three-dots save icon"
                          type="button"
                          id="dropdownMenu2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => {
                            setID(item.id.toString());
                          }}
                        ></i>

                        <ul
                          className="dropdown-menu "
                          aria-labelledby="dropdownMenu2"
                        >
                          <li>
                            {/* <input
                                  type="button"
                                  className="dropdown-item"
                                  placeholder="Add a comment"
                                  onClick={DelPost}
                                  value={item.id}
                                  // onClick={(e) => {
                                  //   setID(e.target.value);
                                  //   DelPost();
                                  // }}
                                /> */}

                            <button
                              type="button"
                              className="dropdown-item"
                              placeholder="Add a comment"
                              onClick={DelPost}
                            >
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* <Image src={logo} alt="" /> */}
                    </div>
                    {/* <Image src={logo} alt="" className="post-image" /> */}

                    <Image
                      src={`data:image/jpeg;base64,${item.picture}`}
                      className={"post-image"}
                      alt=""
                      layout="responsive"
                      width="100%"
                      height="100%"
                    />

                    <div className="post-content">
                      <div className="reaction-wrapper">
                        <button
                          style={{
                            backgroundColor: "#fff",
                            color:
                              myLike.findIndex(
                                (item1) => item1.post == item.id
                              ) > -1
                                ? "#e2264d"
                                : "#000",
                            padding: "12px 20px 10px 10px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleClickLike(item);
                          }}
                        >
                          {/* {isClicked ? "true" : "false"} */}
                          <i className="bi bi-heart-fill"></i>
                        </button>

                        <i className="bi bi-chat icon"></i>
                        <i className="bi bi-send icon"></i>
                        <i className="bi bi-bookmark save icon"></i>
                      </div>
                      <p className="likes">{item.likes} likes</p>
                      <p className="description">
                        <span> {item.Fullname}</span>
                        {item.comment.substring(0, 53)}
                      </p>
                      <p className="post-time">
                        {dayjs(Date(item.CreatedAt)).format("DD MMM YYYY H:mm")}
                        {/* {item.CreatedAt} */}
                      </p>

                      {/* <p className="post-time">2 minutes ago</p> */}
                    </div>
                    <div className="comment-wrapper">
                      <i className="bi bi-send icon"></i>

                      {/* <img src="img/smile.PNG" className="icon" alt="" /> */}
                      <input
                        type="text"
                        className="comment-box"
                        placeholder="Add a comment"
                        onChange={(e) => {
                          setComment({
                            ...comments,
                            ["comment"]: e.target.value,
                          }),
                            setPostes(item.id.toString());
                        }}
                      />
                      <button className="comment-btn" onClick={Comments}>
                        post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="content">
          <div className="wrapper">
            <div className="left-col">
              <div className="post"></div>
              <h3 style={{ fontSize: "16px", textAlign: "center" }}>Empty</h3>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <Image src={et} width="100%" height="75px" />
      </div>
    </>
  );
}
