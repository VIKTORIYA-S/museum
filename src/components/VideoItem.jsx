

function VideoItem({ src }) {
  return (
    <div className="video__iframe_wrapper">
      <iframe
        className="video__item"
        src={src}
        title="video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoItem;