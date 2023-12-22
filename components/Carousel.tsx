import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Burger from "../public/burger.jpg";
import Image, { StaticImageData } from "next/image";
import CategoryHeader from "./CategoryHeader";
import { ItemDrawer } from "./ItemDrawer";

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
    <div className=" mb-24 -z-20 ">
      <div className="bg-background py-8">
        <div className="pl-1 pb-2">
          <CategoryHeader
            headerText="Popular Menu Items"
            subText="Hand picked by our supporters"
          />
        </div>
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
                <ItemDrawer img={img}>
                  <div className="flex flex-col">
                    <motion.div
                      key={index}
                      className="min-w-[16rem] min-h-[16rem] mr-2 z-40 relative  pb-2"
                    >
                      <Image
                        src={img}
                        alt="burger"
                        className="-z-30 rounded-lg"
                        layout="fill"
                        style={{
                          pointerEvents: "none",
                        }}
                      />
                    </motion.div>
                    <div>
                      <div className="pt-2">
                        <h5 className="text-md tracking-wide textt-foreground">
                          Bacon Burger
                        </h5>
                        <h5 className="text-sm text-card-foreground">Brunch</h5>
                        <p className="text-md text-black mt-1 text-popover bg-popover-foreground inline-block py-[1px] px-3 rounded-full">
                          R 120
                        </p>
                      </div>
                    </div>
                  </div>
                </ItemDrawer>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
