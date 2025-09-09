import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function FranchiseHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setShowThumbnail(true);
      setIsPlaying(false);
    } else {
      // Only load video when user clicks play
      if (!videoLoaded) {
        setVideoLoaded(true);
        setShouldPlay(true);
      } else {
        // Video already loaded, play it directly
        if (videoRef.current) {
          // Safari requires muted play for user-initiated playback
          videoRef.current.muted = true;
          videoRef.current
            .play()
            .then(() => {
              // Unmute after successful play if user wants sound
              if (!isMuted) {
                videoRef.current.muted = false;
              }
              setShowThumbnail(false);
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Error playing video:", error);
              // Try muted fallback
              videoRef.current.muted = true;
              videoRef.current
                .play()
                .then(() => {
                  setShowThumbnail(false);
                  setIsPlaying(true);
                })
                .catch((fallbackError) => {
                  console.error("Fallback play failed:", fallbackError);
                });
            });
        }
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    setShowControls(true);
    // Hide controls after 3 seconds
    setTimeout(() => setShowControls(false), 3000);
  };

  // Effect to handle video play when element is created
  useEffect(() => {
    if (shouldPlay && videoRef.current) {
      // Safari requires video to be muted initially for autoplay
      videoRef.current.muted = true;

      // Load the video first, then play
      videoRef.current.load();

      videoRef.current
        .play()
        .then(() => {
          // After successful play, unmute if user wants sound
          if (!isMuted) {
            videoRef.current.muted = false;
          }
          setShowThumbnail(false);
          setIsPlaying(true);
          setShouldPlay(false);
        })
        .catch((error) => {
          console.error("Error playing video:", error);
          // Fallback: try to play muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current
              .play()
              .then(() => {
                setShowThumbnail(false);
                setIsPlaying(true);
                setShouldPlay(false);
              })
              .catch((fallbackError) => {
                console.error("Fallback play also failed:", fallbackError);
                setShouldPlay(false);
              });
          }
        });
    }
  }, [shouldPlay, isMuted]);

  return (
    <>
      {/* Preload thumbnail image for faster loading */}
      <link
        rel="preload"
        as="image"
        href="https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/franchise/EvolveFloorPlan/franchise-video-thumbnail2.webp"
      />
      <div className="w-full pb-12 pt-[90px] md:pt-[120px]">
        <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col gap-8">
          <div className="flex md:flex-row flex-col gap-4 md:gap-10">
            <div className="md:w-[50%] w-full flex ">
              <h1 className="max-w-[655px] text-left leading-[50px] md:leading-[56px] uppercase">
                Franchise with Evolve
              </h1>
            </div>
            <div className="flex flex-col md:w-[50%] w-full text-left justify-center items-start gap-5">
              <h3 className="text-[#000] leading-[26px] font-[400] md:w-[585px]">
                Canada's fastest-growing fitness facility is now franchising.
                Leverage our proven multi-revenue model combining fitness,
                healthcare, and real estate.
              </h3>
              <Link to="/your-fitness-future">
                <button className="btnPrimary">Apply Now</button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-[1200px] relative group">
              {/* Video Container */}
              <div className="relative w-full h-[250px] md:h-[483px] rounded-lg shadow-lg overflow-hidden">
                {/* Thumbnail */}
                {showThumbnail && (
                  <div className="absolute inset-0 z-20">
                    <img
                      src="https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/franchise/EvolveFloorPlan/franchise-video-thumbnail2.webp"
                      alt="Franchise with Evolve - Thumbnail"
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchPriority="high"
                      onLoad={() => setThumbnailLoaded(true)}
                      onError={() => setThumbnailLoaded(true)}
                    />
                    {/* Loading State */}
                    {!thumbnailLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-[#4AB04A] rounded-full animate-spin"></div>
                      </div>
                    )}
                    {/* Play Button Overlay on Thumbnail */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-opacity-30 cursor-pointer transition-all duration-300 hover:bg-opacity-40"
                      onClick={togglePlay}
                    >
                      <div className="w-18 h-18 md:w-18 md:h-18 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300">
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-[#4AB04A] ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video - Only render when needed */}
                {videoLoaded && (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={handleVideoClick}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => {
                      setIsPlaying(false);
                      setShowThumbnail(true);
                    }}
                    onLoadedData={() => {
                      // Ensure video is ready for Safari
                      if (videoRef.current) {
                        videoRef.current.muted = isMuted;
                      }
                    }}
                    loop
                    playsInline
                    preload="none"
                    webkit-playsinline="true"
                    x-webkit-airplay="allow"
                    controls={false}
                    muted={isMuted}
                  >
                    <source
                      src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/FranchiseHero.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/FranchiseHero.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Play Button Overlay on Video (when paused) */}
                {!isPlaying && !showThumbnail && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer transition-all duration-300 hover:bg-opacity-40"
                    onClick={togglePlay}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-gray-800 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Custom Controls */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${
                    showControls || (!isPlaying && !showThumbnail)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Play/Pause Button */}
                      <button
                        onClick={togglePlay}
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                      >
                        {isPlaying ? (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>

                      {/* Mute/Unmute Button */}
                      <button
                        onClick={toggleMute}
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                      >
                        {isMuted ? (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Video Title */}
                    <div className="text-white text-sm font-medium">
                      Franchise with Evolve
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FranchiseHero;
