import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Burger from "../public/burger.jpg";
import Image, { StaticImageData } from "next/image";
import { ItemDrawer } from "@/components/ItemDrawer";

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type CarouselProps = {
  images: StaticImageData[];
};

const EventCarousel = ({ images }: CarouselProps) => {
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
    <div className="mb-24 -z-50 ">
      <h5 className="ml-2 font-bold text-md tracking-wide">EVENTS</h5>
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
              <ItemDrawer image={img}>
                <motion.div
                  key={index}
                  className="min-w-[13rem] min-h-[13rem]  m-2 rounded-lg card-shadow -z-50 relative 
                  "
                >
                  <Image
                    src={img}
                    alt="burger"
                    className="rounded-lg relative -z-50"
                    layout="responsive"
                    width={300}
                    height={300}
                  />
                </motion.div>
              </ItemDrawer>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventCarousel;
