import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logofull from "../../public/ig.png";
import logo from "../../public/instagram-logo-2022_freelogovectors.net_.png";

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: "/",
      title: "home",
    },
    {
      href: "/login",
      title: "login",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <style>
        {`
        main,html{
          background:#f1f1f1;
        }
        p {
          margin-bottom: 0px;
        }
          .sidebar {
            margin: 0;
            // padding: 0;
            width: 20%;
            background-color: #FFFFFF;
            position: fixed;
            height: 100%;
            overflow: auto;
            // padding-top: 10px;
            border-right-style: solid;
            border-color: #d1dae1;
            border-width: 1px;
            z-index: 1;


          }
          .sidebar a {
            display: block;
            color: black;
            padding: 16px;
            text-decoration: none;
            // padding: 6px 8px 6px 16px;
            font-size: 18px;

          }
          .sidebar a.active {
            background-color: #502b17;
            color: white;
          }
          .sidebar a:hover:not(.active) {
            background-color: #fff5de;
            color: #502b17;
          }
        
          .sidebarright {
            // margin: 0;
            margin-left: 75%;
            // padding: 0;
            width: 24%;
            background-color: #f1f1f1;
            position: fixed;
            height: 100%;
            overflow: auto;
            padding-top: 50px;
            z-index: 1;


          }
          .sidebarright a {
            display: block;
            color: black;
            padding: 16px;
            text-decoration: none;
          }
          .sidebarright a.active {
            background-color: #04AA6D;
            color: white;
          }
          .sidebarright a:hover:not(.active) {
            background-color: #555;
            color: white;
          }

          .topnav {
            margin: 0;
            padding: 0;
            // width: 20%;
            background-color: #FFF;
            position: fixed;
            height: 100%;
            overflow: auto;
            z-index: 1;
          }
          
          .topnav a {
            float: left;
            display: block;
            color: black;
            // padding: 8px;
            text-decoration: none;
          }
          
          // .topnav a:hover {
          //   background-color: #ddd;
          //   color: black;
          // }
          
          .topnav a.split {
            float: right;
            // background-color: #04AA6D;
            color: black;
            padding: 12px;
          }
          div.content {
            margin-left: 21%;
            margin-right: 21%;
            // padding: 1px 16px;
            // height: 100vh;
            padding-top: 0px;
            width : 472px;
            margin: auto;
          }



          .profile-card{
            width: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .profile-card .profile-pic{
            flex: 0 0 auto;
            padding: 0;
            background: none;
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
        
        .profile-card:first-child .profile-pic{
            width: 56px;
            height: 56px;
        }
        
        .profile-card .profile-pic .Image{
            border: none;
        }
        
        .profile-card .username{
            font-weight: 500;
            font-size: 14px;
            color: #000;
        }
        
        .sub-text{
            color: rgba(0, 0, 0, 0.5);
            font-size:12px;
            font-weight: 500;
            margin-top: 5px;
        }
        
        .action-btn{
            opacity: 1;
            font-weight: 700;
            font-size: 12px;
        }
        
        .suggestion-text{
            font-size: 14px;
            color: rgba(0, 0, 0, 0.5);
            font-weight: 700;
            margin: 20px 0;
        }


        
          @media screen and (max-width: 700px) {
            .sidebarright {
              display:none;
            }
            .hiddenitemfull{
              display:none;
            }
            .hiddenitem{
              display:none;
            }

            a.hiddenitem{
              display:none;
            }

            .tm{
            padding-top: 100px;

            }
    
            .sidebar {
              width: 100%;
              height: auto;
              position: relative;
              text-align: center;
              position: fixed;
              bottom: 0;
            }
            .sidebar a {
              float: left;
              width:20%;
              padding:16px;
              
            }
            .topnav{
              width: 100%;
              height: auto;
              position: relative;
              text-align: center;
              position: fixed;
              // bottom: 0;
            }
            .topnav a {
              float: left;
              // width:50%;
              padding:8px;
              
            }
            div.content {
              // margin-left: 0;
              margin-left: 10%;
              margin-right: 10%;
              // padding: 1px 16px;
              // height: 100vh;
              // padding-top: 90px;
              width : 472px;
              margin: auto;

            }
            .hiddentext{
              font-size: 0px;
            }
          }
          @media screen and (max-width: 1000px) and (min-width: 700px) {
            .hiddenitem{
              display:none;
            }
            .sidebarright {
              display:none;
            }
            .topnav {
              display:none;
            }
            .sidebar {
              width: 10%;
              height: 100hv;
              position: relative;
              text-align: center;
              position: fixed;
            }
            div.content {
              // margin-left: 0;
              margin-left: 10%;
              margin-right: 10%;
              // padding: 1px 16px;
              // height: 100vh;
              width : 472px;
              // padding-top: 50px;
              margin: auto;
            }
            .hiddentext{
              font-size: 0px;
            }
            
          }
          // @media screen and (max-width: 400px) {
          //   .sidebar a {
          //     text-align: center;
          //     float: none;
          //   }
          // }
          @media screen and (min-width: 1000px) {
            .topnav {
              display:none;
            }
            .hiddenitemfull{
              display:none;
            }

          }
        `}
      </style>

      <main>
        <navber />
        <div className="sidebar ">
          {/* <a className="active" href="#home">
            Home
          </a> */}
          <div className="hiddenitem">
            <a href="#contact">
              <Image
                src={logofull}
                alt="Picture of the author"
                width="100%"
                height="38px"
                placeholder="blur"
              />
            </a>
          </div>

          <div className="hiddenitemfull">
            <a href="#contact">
              <Image
                src={logo}
                alt="Picture of the author"
                width="35px"
                height="35px"
                placeholder="blur"
              />
            </a>
          </div>

          <a className="active" href="#contact">
            <i className="bi bi-house"></i>
            <span className="hiddentext"> Home</span>
          </a>
          <a href="#contact">
            <i className="bi bi-search" />
            <span className="hiddentext"> Search</span>
          </a>
          <a href="#contact">
            <i className="bi bi-plus-square" />
            <span className="hiddentext"> Contact</span>
          </a>
          <a href="#contact" className="hiddenitem">
            <i className="bi bi-heart" />
            <span className="hiddentext"> Notification</span>
          </a>
          <a href="#contact">
            <i className="bi bi-chat" />
            <span className="hiddentext"> Direct</span>
          </a>

          <a href="#contact">
            <i className="bi bi-person" />
            <span className="hiddentext"> Profile</span>
          </a>
        </div>

        <div className="sidebarright ">
          {/* <a className="active" href="#home">
            Home
          </a> */}
          {/* <a className="active" href="#contact">
            <i className="bi bi-x-lg" />
            <span className="hiddentext">Home</span>
          </a>
          <a href="#contact">
            <i className="bi bi-x-lg" />
            <span className="hiddentext">Contact</span>
          </a>
          <a href="#contact">
            <i className="bi bi-x-lg" />
            <span className="hiddentext">Contact</span>
          </a>
          <a href="#contact">
            <i className="bi bi-x-lg" />
            <span className="hiddentext">Contact</span>
          </a> */}

          <div class="wrapper">
            <div class="right-col">
              <div class="profile-card">
                <div class="profile-pic">
                  <Image
                    src={logo}
                    alt="Picture of the author"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <p class="username">modern_web_channel</p>
                  <p class="sub-text">kunaal kumar</p>
                </div>
                <button class="action-btn">switch</button>
              </div>
              <p class="suggestion-text">Suggestions for you</p>
              <div class="profile-card">
                <div class="profile-pic">
                  <Image
                    src={logo}
                    alt="Picture of the author"
                    placeholder="blur"
                  />
                </div>

                <div>
                  <p class="username">modern_web_channel</p>
                  <p class="sub-text">followed bu user</p>
                </div>
                <button class="action-btn">follow</button>
              </div>
            </div>
          </div>
          <p>© 2022 INSTAGRAM FROM WINTER</p>
        </div>

        <div className="topnav">
          <a href="#contact">
            <Image
              src={logofull}
              alt="Picture of the author"
              width="100%"
              height="38px"
              placeholder="blur"
            />
          </a>

          <a href="#contact" className="split">
            <i className="bi bi-heart"></i>
          </a>
        </div>
        <>{children}</>
        {/* <div className="content center">
          <h2>Responsive Sidebar Example</h2>
          <p>
            This example use media queries to transform the sidebar to a top
            navigation bar when the screen size is 700px or less.
          </p>
          <p>
            We have also added a media query for screens that are 400px or less,
            which will vertically stack and center the navigation links.
          </p>
          <h3>Resize the browser window to see the effect.</h3>
        </div> */}
      </main>
    </div>
    // <div className='min-h-screen flex flex-col'>
    //   <header className='bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
    //     Next.js sidebar menu
    //   </header>
    //   <div className='flex flex-col md:flex-row flex-1'>
    //     <aside className='bg-fuchsia-100 w-full md:w-60'>
    //       <nav>
    //         <ul>
    //           {menuItems.map(({ href, title }) => (
    //             <li className='m-2' key={title}>
    //               <Link href={href}>
    //                 <a
    //                   className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
    //                     router.asPath === href && 'bg-fuchsia-600 text-white'
    //                   }`}
    //                 >
    //                   {title}
    //                 </a>
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </nav>
    //     </aside>
    //     <main className='flex-1'>{children}</main>
    //   </div>
    // </div>
  );
}
