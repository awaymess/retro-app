import React, { useEffect, useState } from "react";
import axios from "axios";
// import styled from "styled-components";
import logo from "../public/instagram-logo-2022_freelogovectors.net_.png";
import Image from "next/image";

export default function Notification() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

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
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
