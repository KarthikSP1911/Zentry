import React from "react";
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { GoArrowRight } from "react-icons/go";
import { useGSAP } from "@gsap/react";
    import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiBorderRadius } from "react-icons/bi";
//list as many as you'd like
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loading, setloading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(1);

    const total_videos = 4;
    const nextVdRef = useRef(null);

    const upcomingVideos = (currentIndex % total_videos) + 1;
    const handleClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideos);
         ScrollTrigger.getAll().forEach((trigger) => {
      trigger.disable(false);
    });
    };

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    };

    useEffect(() => {
        if (loadedVideos === total_videos) {
            setloading(false);
        }
    }, [loadedVideos]);

    useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("clip");
      if (!about) return;

      const rect = about.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.enable();
        });
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    useGSAP(
        () => {
            gsap.set("#next-video", { visibility: "visible" });

            gsap.to("#next-video", {
                transformOrigin: "Center Center",
                scale: 1,
                width: "100%",
                height: "100%", 
                duration: 1,
                ease: "power1.inOut",
                
                onStart: () => nextVdRef.current.play(),
            });

            gsap.from("#current-video", {
                transformOrigin: "Center Center",
                scale: 0,
                duration: 1.5,
                ease: "power1.inOut",
            });
        },
        { dependencies: [currentIndex], revertOnUpdate: true }
    );

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    const getVideoSrc = (index) => `/videos/hero-${index}.mp4`; //remember the error

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {loading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}
            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen rounded-lg bg-blue-75"
            >
                <div>
                    <div className="mask-clip-path absolute-center  z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
                        <div
                            onClick={handleClick}
                            className="orgin-center scale-50 opacity-0  transition-all duration-500 ease-in hover:opacity-100 hover:scale-100"
                        >
                            <video
                                src={getVideoSrc(currentIndex + 1)}
                                ref={nextVdRef}
                                loop
                                muted
                                autoPlay
                                playsInline
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center border border-red-"
                                onLoadedData={handleVideoLoad}
                            ></video>
                        </div>
                    </div>
                    <video
                        src={getVideoSrc(currentIndex)}
                        ref={nextVdRef}
                        loop
                        muted
                        autoPlay
                        id="next-video"
                        className="absolute-center absolute z-20 size-64 object-cover object-center "
                        onLoadedData={handleVideoLoad}
                    ></video>
                    <video
                    ref={nextVdRef}
                        src={getVideoSrc(
                            currentIndex === total_videos -1 ? 1 : currentIndex
                        )}
                        autoPlay
                        muted
                        loop
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    ></video>
                </div>
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-white">
                    G<b>A</b>MING
                </h1>

                <div className=" absolute top-0 left-0 z-40 size-full text-white">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading  text-white">
                            REDFI<b>N</b>E
                        </h1>
                        <p className="mb-5 max-w-65 font-robert-regular text-blue-100">
                            Enter the metagame layer
                            <br />
                            Unleash the Game Economy
                        </p>
                        <Button
                            id="watch-trailer"
                            title="watch-trailer"
                            containerClass="bg-yellow-300"
                            leftIcon={<GoArrowRight />}
                        />
                    </div>
                </div>
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-100 text-black">
                G<b>A</b>MING
            </h1>
        </div>
    );
};

export default Hero;
