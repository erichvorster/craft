import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Burger from "../public/burger.jpg";
import Image from "next/image";

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [width]);

  return (
    <div className="mt-[200px] mb-24  -z-20 ">
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden -z-20"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex -z-20"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {card.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="min-w-[13rem] min-h-[18rem] bg-yellow-500/75 m-4 rounded-lg -z-20 relative"
              >
                <Image
                  src={Burger}
                  alt="burger"
                  className="rounded-lg -z-30"
                  layout="responsive"
                  style={{
                    width: "13rem",
                    height: "18rem",
                    pointerEvents: "none",
                  }}
                />
                <div className="absolute z-10 bottom-10 text-3xl text-yellow-400 font-bold p-4">
                  <h5>The Bacon Burger</h5>
                </div>
                <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 rounded-bl-lg rounded-br-lg"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
