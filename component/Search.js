import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../public/ig.png";
import Image from "next/image";

export default function Post() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [rec, setRec] = useState([]);

  useEffect(() => {
    Poster();
    Rec();
  }, []);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  const Poster = async () => {
    try {
      const resp = await axios.get("http://localhost:4000/user");
      // console.log(resp.data);
      setData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const Rec = async () => {
    try {
      const resp = await axios.get("http://localhost:4000/poster");
      console.log(resp.data);
      setRec(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <>
      <style>
        {`

.search-container {
display: flex;
flex-direction: column;
width: 100%;
height: auto;
padding-top: 24px;

}

.dropdown {
background-color: white;
display: flex;
flex-direction: column;
border: 12px solid white;
z-index: 1;
position: fixed;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

min-width: 472px;
margin-top: 50px;
}

.dropdown:empty {
border: none;
}

.dropdown-row {
cursor: pointer;
text-align: start;
margin: 2px 0;
padding: 10px;

}

input {
width: 100%;
border-radius: 25px;
border: 1px solid #555;
display: block;
padding: 9px 4px 9px 40px;
}

.search-inner {
display: flex;
}
    

.grid-container {
  display: grid;
  gap: 10px 10px;
  grid-template-columns: auto auto auto;
  height:150px; 


}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  // border: 1px solid rgba(0, 0, 0, 0.8);
  // object-fit: cover;
  position: relative;
  overflow: hidden;
 
}

img{
  // object-fit: cover;
  object-position: 50% 50%;
  height:100%; 
}
.rec{
  padding-top: 24px;
}

.input-icons i {
  position: absolute;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

.icon {
  padding: 10px;
  min-width: 40px;
}

.input-field {
  width: 100%;
  padding: 10px;
  text-align: center;
}

@media screen and (max-width: 700px) {
  .search-container {
    display: flex;
    padding-top: 72px;
    
    }
    
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2px 2px;
  }
}
  
 `}
      </style>

      <div className="content tm">
        <div className="search-container">
          <div className="input-icons">
            {/* <i className="fa fa-user icon"></i> */}
            <i className="bi bi-search save icon"></i>
            <input type="text" value={value} onChange={onChange} placeholder="Search" />
          </div>
          {/* <div className="search-inner">
            <i className="bi bi-three-dots save icon"></i>
            <input type="text" value={value} onChange={onChange} /> 
            <button onClick={() => onSearch(value)}> Search </button>
          </div> */}

          <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.name)}
                  className="dropdown-row"
                  key={item.name}
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>

        <div className="rec">
          <div className="grid-container">
            {rec.map((item, index) => (
              <div className="grid-item" key={item._id}>
                {/* {item.name} */}
                {/* <Image src="https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg" className="post-image" layout="fixed" alt="" /> */}
                {/* <Image
                  src={logo}
                  alt="Picture of rose"
                  // height="100px"
                /> */}
                <img
                  src="https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
                  style={{ objectPosition: "50% 50%" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
