import React, { useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { useLocation } from "react-router-dom";

function VideoMarketingSection() {
  const { pathname } = useLocation();
  const [isMuted, setIsMuted] = useState(true);

  const shouldShow = pathname === "/locations/vancouver-post";
  if (!shouldShow) return null;

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <section className="relative w-full min-h-[88svh] h-[88svh] overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full min-h-full min-w-full object-cover"
        src="/videos/vancouver_post_video_with_music.webm"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        controls={false}
        preload="metadata"
        aria-label="Vancouver Post club video"
      />
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 rounded-full bg-black/50 p-3 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeOff className="h-7 w-7 text-white" aria-hidden />
        ) : (
          <Volume2 className="h-7 w-7 text-white" aria-hidden />
        )}
      </button>
    </section>
  );
}

export default VideoMarketingSection;
