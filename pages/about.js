//import styles from "../styles/about.module.css";
import styles from "../styles/About.module.scss";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>About Page from Bharath</title>
        <meta name="description" content="next js course" />
      </Head>
      <h1 className={styles.highLightscss}>About Page!!</h1>
    </>
  );
}

export default About;

About.getLayoutFun = function PageLayout(page) {
  return <>{page}</>;
};
