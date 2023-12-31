import React from "react";
import YoutubeLogo from "resources/images/yt-logo.png";
import AppConfig from "App.config";

const Home = () => {
  return (
    <>
      <div className="row text-center">
        <div className="col">
          <h3>Welcome to react component Apurv</h3>
          <p>
            A collection of various components with the video tutorials on how
            to create them.
          </p>
          <p>
            Please visit the refrence youtube channel for more videos on react
            and some components
          </p>
          <p className="d-inline">
            <a
              href="https://www.youtube.com/channel/UCdItDI6oTgPW7l9WOJI7ItA/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={YoutubeLogo}
                style={{ width: "180px" }}
                className="img-fluid"
                alt="Youtube Logo"
              />
            </a>
          </p>
        </div>
      </div>
      <div className="row py-5">
        {AppConfig.youtubeVideos.map((video) => {
          return (
            <div className="col-md-4 p-3 card-hover" key={video.id}>
              <div className="card">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="card-img-top"
                    src={`https://img.youtube.com/vi/${video.id}/sddefault.jpg`}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
