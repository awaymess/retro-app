import Head from "next/head";
import Image from "next/image";
import Layout from "../component/layout/layout";
import Nev from "../component/Nev";
import Post from "../component/Post";
import Story from "../component/Story";
import styles from "../styles/Home.module.css";

export default function Home({ Component, pageProps }) {
  return (
    <Layout>
      <Story />
      <Post />
    </Layout>
  );
  // <>
  //   {/* <Nev/> */}
  //   {/* <Story/> */}
  //   {/* <Post /> */}
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // </>
}
