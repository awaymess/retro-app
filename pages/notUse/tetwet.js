import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Twitter Clone - Final</title>
        <link rel="stylesheet" href="styles.css" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />
      </Head>

      <main>
        <div className="sidebar">
          <i className="fab fa-twitter"></i>
          <div className="sidebarOption active">
            <span className="material-icons"> home </span>
            <h2>Home</h2>
          </div>

          <div className="sidebarOption">
            <span className="material-icons"> search </span>
            <h2>Explore</h2>
          </div>

          <div className="sidebarOption">
            <span className="material-icons"> notifications_none </span>
            <h2>Notifications</h2>
          </div>

          <div className="sidebarOption">
            <span className="material-icons"> mail_outline </span>
            <h2>Messages</h2>
          </div>

          <div className="sidebarOption">
            <span className="material-icons"> bookmark_border </span>
            <h2>Bookmarks</h2>
          </div>

          <div className="sidebarOption">
            <span className="material-icons"> list_alt </span>
            <h2>Lists</h2>
          </div>

          <div className="sidebarOption">
            <span className="material-icons"> perm_identity </span>
            <h2>Profile</h2>
          </div>

          <div className="sidebarOption">
            <span className="material-icons"> more_horiz </span>
            <h2>More</h2>
          </div>
          <button className="sidebar__tweet">Tweet</button>
        </div>

        <div className="feed">
          <div className="feed__header">
            <h2>Home</h2>
          </div>

          <div className="tweetBox">
            <form>
              <div className="tweetbox__input">
                <img
                  src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                  alt=""
                />
                <input type="text" placeholder="What's happening?" />
              </div>
              <button className="tweetBox__tweetButton">Tweet</button>
            </form>
          </div>

          <div className="post">
            <div className="post__avatar">
              <img
                src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                alt=""
              />
            </div>

            <div className="post__body">
              <div className="post__header">
                <div className="post__headerText">
                  <h3>
                    Somanath Goudar
                    <span className="post__headerSpecial">
                      <span className="material-icons post__badge"> verified </span>
                      @somanathg
                    </span>
                  </h3>
                </div>
                <div className="post__headerDescription">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <img
                src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
                alt=""
              />
              <div className="post__footer">
                <span className="material-icons"> repeat </span>
                <span className="material-icons"> favorite_border </span>
                <span className="material-icons"> publish </span>
              </div>
            </div>
          </div>

          <div className="post">
            <div className="post__avatar">
              <img
                src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                alt=""
              />
            </div>

            <div className="post__body">
              <div className="post__header">
                <div className="post__headerText">
                  <h3>
                    Somanath Goudar
                    <span className="post__headerSpecial">
                      <span className="material-icons post__badge"> verified </span>
                      @somanathg
                    </span>
                  </h3>
                </div>
                <div className="post__headerDescription">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <img
                src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
                alt=""
              />
              <div className="post__footer">
                <span className="material-icons"> repeat </span>
                <span className="material-icons"> favorite_border </span>
                <span className="material-icons"> publish </span>
              </div>
            </div>
          </div>
        </div>

        <div className="widgets">
          <div className="widgets__input">
            <span className="material-icons widgets__searchIcon"> search </span>
            <input type="text" placeholder="Search Twitter" />
          </div>

          <div className="widgets__widgetContainer">
            <h2>What's happening?</h2>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Sunsets don&#39;t get much better than this one over
                <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">
                  @GrandTetonNPS
                </a>
                .
                <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">
                  #nature
                </a>
                <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">
                  #sunset
                </a>
                <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a>
              </p>
              &mdash; US Department of the Interior (@Interior)
              <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">
                May 5, 2014
              </a>
            </blockquote>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </div>
      </main>
    </div>
  );
}
