import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import logofull from "../public/ig.png";
import logo from "../public/instagram-logo-2022_freelogovectors.net_.png";


export default function Story() {
  // const sideScroll = (
  //   element: HTMLDivElement,
  //   speed: number,
  //   distance: number,
  //   step: number
  // ) => {
  //   let scrollAmount = 0;
  //   const slideTimer = setInterval(() => {
  //     element.scrollLeft += step;
  //     scrollAmount += Math.abs(step);
  //     if (scrollAmount >= distance) {
  //       clearInterval(slideTimer);
  //     }
  //   }, speed);
  // };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        {`
    .tm{
      padding-top: 24px;
      // width: 100%;
      // padding-top: 400px;
      // padding-bottom: 16px;
      // display: flex;
      // justify-content: center;
      // margin-top: 50px;
      
  }
  
  .wrapper{
      width: 100%;
      max-width: 472px;
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 30px;

  }
  
  .left-col{
      display: flex;
      flex-direction: column;
  }
  
  .status-wrapper{
      width: 100%;
      height: 100px;
      background: #fff;
      border: 1px solid #dfdfdf;
      border-radius: 6px;
      padding: 10px;
      padding-right: 0;
      display: flex;
      align-items: center;
      overflow: hidden;
      overflow-x: auto;
  }
  
  .status-wrapper::-webkit-scrollbar{
      display: none;
  }
  
  .status-card{
      flex: 0 0 auto;
      width: 80px;
      background: #fff;
      max-width: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 1px;
  }
  
  .profile-pic{
      width: 56px;
      height: 56px;
      border-radius: 50%;
      overflow: hidden;
      padding: 3px;
      background: linear-gradient(45deg, rgb(255, 230, 0), rgb(255, 0, 128) 80%);
  }
  
  .profile-pic img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #fff;
  }

  .pmb{
    margin-bottom: 0px;
  }
  
  .username{
      width: 100%;
      overflow: hidden;
      text-align: center;
      font-size: 12px;
      margin-top:5px;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 0px;
   }

   @media screen and (max-width: 700px) {
    .tm{
    padding-top: 72px;

    }
    Image {
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      user-drag: none;
    }
  }
  `}
      </style>
      <div className=" tm">
        <div className="content tm">
          <div className="wrapper">
            <div className="left-col">
              <div className="status-wrapper">
                <button type="button">
                  <div className=" status-card">
                    <div className="profile-pic">
                      <Image src={logo} alt="" draggable="false" />
                    </div>
                    <p className="username pmb ">user_name_1</p>
                  </div>
                </button>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_2</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <Image src={logo} alt="" />
                  </div>
                  <p className="username pmb">user_name_3</p>
                </div>

                {/* // +5 more status card elements. */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
