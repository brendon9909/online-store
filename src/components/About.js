import Figure from "react-bootstrap/Figure";

export default function About() {
  return (
    <div>
      <Figure>
        <br />
        <Figure.Image
          width={251}
          height={260}
          alt="store-logo"
          src="https://img.freepik.com/premium-photo/simple-logo-game-store-flat-design-generative-ai_934475-4705.jpg"
        />
        <Figure.Caption>
          <span className="warn">
            Logo is not mine{" "}
            <a
              href="https://www.freepik.com/premium-ai-image/simple-logo-game-store-flat-design-generative-ai_60941931.htm"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            is the original source
          </span>
          <br />
          <span className="myCaption">
            Welcome to "GameVista," your ultimate destination for all things
            gaming! At GameVista, we pride ourselves on being the premier online
            game store, offering an unparalleled selection of games, consoles,
            accessories, and more
          </span>
        </Figure.Caption>
        <br />
        <Figure.Image
          width={700}
          height={260}
          alt="store-logo"
          src="https://media.timeout.com/images/103377921/image.jpg"
        />
        <br />
        <span className="warn">
          I do not own these images,{" "}
          <a href="https://www.timeout.com/newyork/shopping/best-video-game-store-in-nyc">
            here
          </a>{" "}
          and{" "}
          <a href="https://www.polygon.com/2017/7/17/15974096/what-it-costs-to-run-an-independent-video-game-store">
            here
          </a>{" "}
          are their sources
        </span>
        <br />
        <Figure.Image
          style={{ margin: "50px" }}
          width={700}
          height={260}
          alt="store-logo"
          src="https://cdn.vox-cdn.com/thumbor/GLFIhiTKbEGzt4jx4sj7VW26cQE=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8854909/161210_Polygon_Gamestores_0159.jpg"
        />
      </Figure>
      <hr />
      <a href="mailto:brendonpillay03@gmail.com">
        <img
          className="mail"
          src="https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg"
          alt="gmail"
        />
      </a>
      <img
        className="phone"
        src="https://www.svgrepo.com/show/6064/phone-call.svg"
        alt="phone"
      />
      <span style={{ color: "white" }}>+27 71 347 2385</span>
      <br />
    </div>
  );
}
