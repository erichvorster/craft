import React from "react";

// Scroll direction hook
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState("");

  React.useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setScrollDirection("down");
      } else if (event.deltaY < 0) {
        setScrollDirection("up");
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return scrollDirection;
}

export default useScrollDirection;
