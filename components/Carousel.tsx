import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Burger from "../public/burger.jpg";
import Image, { StaticImageData } from "next/image";

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type CarouselProps = {
  images: StaticImageData[];
  type: string;
};

const Carousel = ({ images, type }: CarouselProps) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [width]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const deltaX = Math.abs(e.touches[0].clientX - startX);
      const deltaY = Math.abs(e.touches[0].clientY - startY);

      if (deltaX > deltaY) {
        e.preventDefault();
      }
    };

    const currentCarousel = carousel.current;

    currentCarousel?.addEventListener("touchstart", handleTouchStart);
    currentCarousel?.addEventListener("touchmove", handleTouchMove);

    return () => {
      currentCarousel?.removeEventListener("touchstart", handleTouchStart);
      currentCarousel?.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className=" mb-24  -z-20 ">
      <h5 className="ml-2 font-bold text-md tracking-wide">
        POPULAR MENU ITEMS
      </h5>
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden -z-20"
        whileTap={{ cursor: "grabbing" }}
        style={{ overflowY: "hidden" }}
      >
        <motion.div
          className="flex -z-20"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((img, index) => {
            return (
              <motion.div
                key={index}
                className="min-w-[13rem] min-h-[13rem]  m-2 -z-20 relative  pb-2 card-shadow bg-white border-2 border-foreground rounded"
              >
                <Image
                  src={img}
                  alt="burger"
                  className="-z-30"
                  layout="responsive"
                  width={200}
                  height={200}
                  style={{
                    width: "11rem",
                    height: "11rem",
                    pointerEvents: "none",
                  }}
                />
                <div className=" p-4">
                  <div>
                    <h6 className="text-xl font-bold">Bacon Burger</h6>
                    <p className="text-xl font-bold text-yellow-500/75">R90</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
