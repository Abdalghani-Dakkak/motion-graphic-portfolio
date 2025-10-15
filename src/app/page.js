"use client";

import { useState } from "react";

import PortfolioItem from "@/components/PortfolioItem";
import VideoModal from "@/components/VideoModal";

import { portfolioData } from "@/constants/portfolioData";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-center py-12 lg:py-20">
          <p className="text-center text-2xl lg:text-3xl max-w-2xl lg:max-w-4xl leading-relaxed">
            Felix is a Croatian–born, New York–based freelance designer &
            director for film & television.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-20">
          {portfolioData.map((item, index) => (
            <PortfolioItem
              key={index}
              item={item}
              onVideoClick={setActiveVideo}
            />
          ))}
        </div>
      </div>
    </>
  );
}
