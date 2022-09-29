import Layout from "../component/layout/layout";
import Post from "../component/Post";
import Story from "../component/Story";

export default function Home({ Component, pageProps }) {
  return (
    <Layout>
      <Story />
      {/* <Post /> */}
    </Layout>
  );
}
