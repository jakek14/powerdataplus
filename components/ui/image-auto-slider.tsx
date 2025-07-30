import React from "react";

const getImagePath = (path: string) => {
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.pathname.includes('/darkmodeknownvisitors');
    return isGitHubPages ? `/darkmodeknownvisitors${path}` : path;
  }
  // Server-side: use environment check
  return process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}${path}` : path;
};

const images = [
  getImagePath("/Shopify.png"),
  getImagePath("/Snapchat.png"),
  getImagePath("/Squarespace.png"),
  getImagePath("/Tiktok.png"),
  getImagePath("/Wix.png"),
  getImagePath("/Woo.png")
];

const duplicatedImages = [...images, ...images];

const ImageAutoSlider: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .infinite-scroll {
          animation: scroll-right 25s linear infinite;
        }
        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
        .image-item {
          transition: none;
          position: relative;
        }
        .image-item:hover {
          transform: none;
          z-index: 1;
        }
      `}</style>
      <div className="w-full overflow-x-hidden overflow-y-hidden flex items-center justify-center bg-transparent -my-8 sm:my-0">
        <div className="scroll-container w-full max-w-6xl bg-transparent">
          <div className="infinite-scroll flex gap-3 md:gap-6 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-3xl overflow-hidden bg-white border-none shadow-none outline-none flex items-center justify-center"
                style={{ 
                  boxShadow: 'inset 0 8px 16px rgba(0, 0, 0, 0.5), inset 0 -8px 16px rgba(255, 255, 255, 1)', 
                  border: 'none', 
                  outline: 'none', 
                  background: 'white' 
                }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="w-full h-full object-contain"
                  style={{ boxShadow: 'none', border: 'none', outline: 'none', background: 'white' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageAutoSlider; 