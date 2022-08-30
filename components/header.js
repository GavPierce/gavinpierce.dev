function Header() {
  const ColorPallet = {
    brown: "#4F4339",
    cream: "#F0EBEA",
    green: "#DEEAD8",
    orange: "#FF7D00",
  };

  return (
    <div className="container">
      <header>
        <h2 className="titan-font icon">
          <div className="circle"></div>
          <div className="rotating-hand hand-1">G</div>
          <div className="rotating-hand hand-2">A</div>
          <div className="rotating-hand hand-3">V</div>
          <div className="rotating-hand hand-4">I</div>
          <div className="rotating-hand hand-5">N</div>
          <div className="rotating-hand hand-6">P</div>
          <div className="rotating-hand hand-7">I</div>
          <div className="rotating-hand hand-8">E</div>
          <div className="rotating-hand hand-9">R</div>
          <div className="rotating-hand hand-10">C</div>
          <div className="rotating-hand hand-11">E</div>
        </h2>
        <div className="title">
          {" "}
          <h1 className="titan-font" style={{ padding: 0 }}>
            {" "}
            Fullstack <br></br>Web Dev
          </h1>
          <h3 className="montserrat subtitle">
            Crafting the web <br></br>one cup at a time.
          </h3>
        </div>
        <div className="links">
          {" "}
          <a
            className="material-symbols-outlined"
            href="mailto:gavinpierce97@gmail.com"
          >
            Mail
          </a>
          <br></br>
          <a
            className="material-symbols-outlined"
            href="https://github.com/GavPierce"
          >
            Code
          </a>
        </div>
      </header>

      <style jsx>{`
        .titan-font {
          text-align: left;
          font-size: 4em;
          line-height: 1em;
          letter-spacing: 0.1em;
          font-family: "Corben", cursive;
          color: ${ColorPallet.brown};
        }
        .container {
          position: relative;
          width: 100%;
          padding-top: 1em;
          z-index: 2;
        }
        header {
          width: 100%;
          display: flex;
          padding: 0 6em;
          justify-content: space-between;
        }
        .icon {
          margin-top: 2em;
          margin-left: 2em;
          font-size: 2em;
          position: relative;
        }
        .links {
          background: white;
          border-radius: 10px;
          position: absolute;
          top: 20%;
          right: 0;
        }
        a {
          color: ${ColorPallet.brown};
          font-size: 4em;
          text-decoration: none;
        }
        .github {
          background: white;
        }
        .circle {
          z-index: 2;
          position: relative;
          height: 4em;
          width: 4em;
          background-color: ${ColorPallet.green};
          border-radius: 50%;
        }
        .rotating-name {
          position: relative;
        }
        .rotating-hand {
          z-index: 1;
          position: absolute;
          top: -1em;
          height: 6.2em;
          left: 1.5em;
          -webkit-transition: 5s;
          -moz-transition: 5s;
          -o-transition: 5s;
          transition: 5s;
        }
        .hand-1 {
          transform: rotate(-100deg);
        }
        .hand-2 {
          transform: rotate(-70deg);
        }
        .hand-3 {
          transform: rotate(-45deg);
        }
        .hand-4 {
          transform: rotate(-20deg);
        }
        .hand-5 {
          transform: rotate(0deg);
        }
        .hand-6 {
          transform: rotate(40deg);
        }
        .hand-7 {
          transform: rotate(62deg);
        }
        .hand-8 {
          transform: rotate(80deg);
        }
        .hand-9 {
          transform: rotate(110deg);
        }
        .hand-10 {
          transform: rotate(135deg);
        }
        .hand-11 {
          transform: rotate(165deg);
        }

        .circle:hover ~ .rotating-hand {
          transform: rotate(360deg);
        }

        .montserrat {
          font-family: "montserrat";
          color: ${ColorPallet.brown};
          text-align: left;
          font-size: 2em;
          line-height: 1em;
          letter-spacing: 0.1em;
        }
        .title {
          background: #f0ebeab0;
        }
        .subtitle {
          margin-top: 0.5em;
        }
        .material-symbols-outlined {
          font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
        }
        @media (max-width: 900px) {
          header {
            flex-direction: column;
            padding: 0;
          }
          .icon {
            margin: 1em auto;
          }
          .titan-font {
            text-align: center;
          }
          .subtitle {
            text-align: center;
          }
        }
        @media (max-width: 700px) {
          .titan-font {
            font-size: 2.5em;
            text-align: center;
          }
          .subtitle {
            font-size: 1.5em;
          }
        }
      `}</style>
    </div>
  );
}
export default Header;
