//@ts-nocheck
import * as _ from "lodash";
import video from "./video/video.mp4";
export const Video = () => {
  function playPause() {
    try {
      var myVideo = document.getElementById("video1") as any;
      if (
        _.isElement(myVideo) &&
        !_.isNil(myVideo) &&
        !_.isNil(myVideo.paused)
      ) {
        if (myVideo.paused) myVideo.play();
        else myVideo.pause();
      }
    } catch (e) {}
  }
  return (
    <section className="video">
      <video id="video1">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay">
        <button onClick={playPause}>
          <i className="fa fa-video-camera" aria-hidden="true"></i>
          مشاهدة الفيديو
        </button>
      </div>
    </section>
  );
};

export default Video;
