import React, { useEffect, useState } from "react";
import axios from "axios";
// import styled from "styled-components";
import logo from "../public/instagram-logo-2022_freelogovectors.net_.png";
import Image from "next/image";

export default function Notification() {
  const url_v1 = process.env.NEXT_PUBLIC_API_URL_V1;
  const url_v2 = process.env.NEXT_PUBLIC_API_URL_V2;
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
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

  const Profile = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get(url_v2 + "profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.data.status !== 200) {
        window.location.href = "/login";
      }
      setData(resp.data.data)
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <>
      <style>
        {`
    


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

      <div className="content">
        <div className="topNoti">
          <h3>Notification</h3>
        </div>
        <div className="wrapper">
          <table
            className="table table-borderless"
            style={{ backgroundColor: "#FFF" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.fullName}</td>
                  <td>{item.Email}</td>
                  <td>1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
