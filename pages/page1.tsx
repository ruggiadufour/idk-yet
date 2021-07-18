import Head from "next/head";

//Component for searching the books
export default function page1(props) {
  return (
    <>
      <Head>
        <title>Page Title</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>Page 1</h1>

      <style jsx>{`
        h1 {
          color: orange;
        }
      `}</style>
    </>
  );
}

//Server side rendering
export async function getServerSideProps({ query }) {
  return {
    props: {},
  };
}
