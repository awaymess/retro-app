import Layout from "../component/layout/layout";
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
