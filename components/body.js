import Image from "next/image";
function Body() {
  const ColorPallet = {
    brown: "#4F4339",
    cream: "#F0EBEA",
    green: "#DEEAD8",
    orange: "#FF7D00",
  };

  return (
    <div className="container">
      <body>
        <Image
          src={"/espresso-machine2.webp"}
          width="500"
          height={"500"}
          layout="intrinsic"
        ></Image>
        <div className="invite">Ready to brew something up?</div>
      </body>

      <style jsx>{`
        a {
          color: ${ColorPallet.brown};
        }
        body {
          display: flex;
          justify-content: space-between;
        }
        .container {
          z-index: 1;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .invite {
          padding: 5em 10em 0 0;
          font-size: 2em;
          color: ${ColorPallet.brown};
          font-family: "montserrat";
        }

        @media (max-width: 900px) {
          .container {
            left: -2.5em;
          }
          .invite {
            display: none;
          }
        }
        @media (max-width: 700px) {
        }
      `}</style>
    </div>
  );
}
export default Body;
