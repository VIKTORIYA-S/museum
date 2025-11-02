
function VideoMain() {
    return (
        <div className="video__big_wrapper">
                    <div className="video__main_wrapper">
                        <iframe className="video__main video__main-player" src="https://www.youtube.com/embed/zp1BXPX8jcU?si=ZHTADxuCGXA-VDV8&enablejsapi=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div>
                </div>
    )
}

export default VideoMain;