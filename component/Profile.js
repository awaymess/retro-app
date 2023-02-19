import React, { useEffect, useState } from "react";
import axios from "axios";
// import styled from "styled-components";
import logo from "../public/instagram-logo-2022_freelogovectors.net_.png";
import et from "../public/empty.png";
import Image from "next/image";

export default function Notification() {
  const url_v1 = process.env.NEXT_PUBLIC_API_URL_V1;
  const url_v2 = process.env.NEXT_PUBLIC_API_URL_V2;
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Profile();
    Posts();
    setMounted(true);
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

  const Profile = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get(url_v2 + "profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.data.length < 0) {
        window.location.href = "/Setting";
      }

      setData(resp.data.data);
      // console.log(resp.data.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const Setting = async () => {
    window.location.href = "/Setting";
  };
  const Posts = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get(url_v2 + "postsID", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.data.status !== 200) {
        window.location.href = "/login";
      }
      setPost(resp.data.data);
    } catch (err) {
      // Handle Error Her

      console.error(err);
    }
  };

  return (
    <>
      <style>
        {`

img {
    display: block;
}

.container {
    max-width: 93.5rem;
    margin: 0 auto;
    // padding: 0 2rem;
}

.btn {
    display: inline-block;
    font: inherit;
    background: none;
    border: 3px;
    color: inherit;
    padding: 0;
    cursor: pointer;

}



.profile-edit-btn {
  font-size: 16px;
  line-height: 1.8;
  border: 2px solid #dbdbdb;
  border-radius: 0.3rem;
  padding: 0 2.4rem;
  margin-left: 2rem;
}

.btn:focus {
    outline: 1px auto #4d90fe;
}

.visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
}


@supports (display: grid) {
  .profile {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: repeat(3, auto);
      grid-column-gap: 3rem;
      align-items: center;
  }

  .profile-image {
      grid-row: 1 / -1;
  }

  .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
      grid-gap: 2rem;
  }

  .profile-image,
  .profile-user-settings,
  .profile-stats,
  .profile-bio,
  .gallery-item,
  .gallery {
      width: auto;
      margin: 0;
  }


}

      
`}
      </style>
      {mounted ? (
        <div className="content">
          {/* <div style={{ backgroundColor: "#000" }}></div> */}

          {data.map((item, index) => (
            <div className="container" key={index}>
              <div className="profile">
                <div className="profile-image">
                  <div className="profile-pic1">
                    {item.picture ? (
                      <img
                        src={`data:image/jpeg;base64,${item.picture}`}
                        className="gallery-image"
                        layout="responsive"
                        width="100%"
                        height="100%"
                      />
                    ) : (
                      <Image src={logo} />
                      // <img src={logo} alt="" />
                    )}
                  </div>
                </div>

                <div className="profile-user-settings">
                  <h1 className="profile-user-name">{item.name}</h1>

                  <button className="btn profile-edit-btn" onClick={Setting}>
                    Edit Profile
                  </button>

                  <button
                    className="btn profile-settings-btn"
                    aria-label="profile settings"
                  >
                    <i className="fas fa-cog" aria-hidden="true"></i>
                  </button>
                </div>

                <div className="profile-stats">
                  <ul>
                    <li>
                      <span className="profile-stat-count">164</span> posts
                    </li>
                    <li>
                      <span className="profile-stat-count">188</span> followers
                    </li>
                    <li>
                      <span className="profile-stat-count">206</span> following
                    </li>
                  </ul>
                </div>

                <div className="profile-bio">
                  <p>
                    <span className="profile-real-name">{item.subname}</span>
                  </p>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
          <hr className="hide"></hr>

          <div className="container">
            <div className="r">
              {post && post.length > 0 ? (
                post.map((item, index) => (
                  <div className="c" key={index}>
                    {item && item.Picture && (
                      <Image
                        src={`data:image/jpeg;base64,${item.Picture}`}
                        className="gallery-image"
                        layout="responsive"
                        width="100%"
                        height="100%"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p>empty</p>
              )}
            </div>

            {/* <div className="loader"></div> */}
          </div>
          <div className="container">
            <Image src={et} width="100%" height="400px" />
          </div>
        </div>
      ) : null}
    </>
  );
}
