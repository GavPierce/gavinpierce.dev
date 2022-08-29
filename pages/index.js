import Head from "next/head";
import Header from "../components/header";
import Body from "../components/body";
export default function Home() {
  const ColorPallet = {
    brown: "#4F4339",
    cream: "#F0EBEA",
    green: "#DEEAD8",
    orange: "#FF7D00",
  };

  return (
    <div className="container">
      <Head>
        <title>Gavin Pierce</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Corben:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />

      <style jsx>{`
        .container {
          min-height: 100vh;
          min-width: 100vw;

          justify-content: center;
          align-items: center;
          background-color: ${ColorPallet.cream};
        }

        main {
          padding: 5rem 0;
          flex: 1;
          width: 100%;
          display: flex;
        }
        .espresso {
          max-height: 40em;
          z-index: 0;
          position: absolute;
          left: -5em;
          bottom: -3em;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
