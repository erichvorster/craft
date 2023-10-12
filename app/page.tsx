"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryHeader from "@/components/CategoryHeader";
import CategoryNav from "@/components/CategoryNav";
import useScrollDirection from "@/components/Hooks/useScrollDirection";

export default function Home() {
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolledToTop(true);
      } else {
        setScrolledToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [1, 2, 3, 4, 5];
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);

  return (
    <main className="min-h-screen px-2 py-2">
      <div className="mt-4">
        <Tabs defaultValue="account" className="w-full ">
          <div
            className={`fixed top-0 left-0 right-0 z-10 bg-white p-4 ${
              scrollDirection === "down" ? "-translate-y-16" : "translate-y-0"
            } transition-transform duration-200 ${
              scrolledToTop
                ? ""
                : "box-shadow transition-shadow duration-200 ease-in-out"
            }`}
          >
            <Nav />
            <TabsList className="w-full">
              <TabsTrigger value="account" className="w-full">
                Food
              </TabsTrigger>
              <TabsTrigger value="password" className="w-full">
                Drinks
              </TabsTrigger>
            </TabsList>
            <CategoryNav />
          </div>
          <TabsContent value="account">
            <div className="mt-72">
              <CategoryHeader
                headerText={"BRUNCH"}
                subText={"ONLY AVAILABLE BETWEEN 10:30 AND 13:00"}
              />

              {items.map((itemm, idx) => (
                <div className="grid grid-cols-3 mt-8">
                  <div className=" w-auto border border-primary rounded bg-foreground"></div>
                  <div className="col-span-2 ml-4">
                    <div className="flex justify-between">
                      <h5 className="text-xl font-bold">Brunch Item</h5>
                      <h5 className="text-xl font-bold text-yellow-500">
                        R 120
                      </h5>
                    </div>

                    <p className="text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusamus fugit laudantium quae aperiam, neque magni unde
                      quas, ea consectetur minima quisquam deleniti numquam,
                      ipsam laboriosam doloremque explicabo quis provident sed!
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <CategoryHeader headerText={"SNACKS"} />
              {items.map((itemm, idx) => (
                <div className="grid grid-cols-3 mt-8">
                  <div className=" w-auto border border-primary rounded bg-foreground"></div>
                  <div className="col-span-2 ml-4">
                    <div className="flex justify-between">
                      <h5 className="text-xl font-bold">Snack Item</h5>
                      <h5 className="text-xl font-bold text-yellow-500">
                        R 90
                      </h5>
                    </div>

                    <p className="text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Accusamus fugit laudantium quae aperiam, neque magni unde
                      quas, ea consectetur minima quisquam deleniti numquam,
                      ipsam laboriosam doloremque explicabo quis provident sed!
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pb-12">
              <CategoryHeader headerText={"BOWLS & SALADS"} />
              <div className="text-center mt-10">
                <h6 className="text-xl font-bold">POKE BOWL</h6>
              </div>
              <div className="text-center mt-6">
                <p className="underline-yellow-300">
                  RED CABBAGE - CUCUMBER - BLACK RICE - CARROT RIBBONS
                </p>
                <p>CHERRY TOMATOES - EDAMAME BEANS - AVOCADO - RED ONION</p>
                <p>SWEET CORN - TERIYAKI, SOYA & PAPRIKA DRESSING</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-secondary rounded-lg flex flex-col items-center ml-2 py-4 shadow-lg">
                  <div className="h-40 w-40 rounded-full bg-primary"></div>
                  <h6 className="text-xl font-bold mt-4">PLAIN</h6>
                  <p className="text-2xl font-bold text-yellow-500 mt-2">R90</p>
                </div>
                <div className="bg-secondary rounded-lg flex flex-col items-center ml-2 py-4 shadow-lg">
                  <div className="h-40 w-40 rounded-full bg-primary"></div>
                  <h6 className="text-xl font-bold mt-4">PLAIN</h6>
                  <p className="text-2xl font-bold text-yellow-500 mt-2">R90</p>
                </div>
                <div className="bg-secondary rounded-lg flex flex-col items-center ml-2 py-4 shadow-lg">
                  <div className="h-40 w-40 rounded-full bg-primary"></div>
                  <h6 className="text-xl font-bold mt-4">PLAIN</h6>
                  <p className="text-2xl font-bold text-yellow-500 mt-2">R90</p>
                </div>
                <div className="bg-secondary rounded-lg flex flex-col items-center ml-2 py-4 shadow-lg">
                  <div className="h-40 w-40 rounded-full bg-primary"></div>
                  <h6 className="text-xl font-bold mt-4">PLAIN</h6>
                  <p className="text-2xl font-bold text-yellow-500 mt-2">R90</p>
                </div>
                <div className="bg-secondary rounded-lg flex flex-col items-center ml-2 py-4 shadow-lg">
                  <div className="h-40 w-40 rounded-full bg-primary"></div>
                  <h6 className="text-xl font-bold mt-4">PLAIN</h6>
                  <p className="text-2xl font-bold text-yellow-500 mt-2">R90</p>
                </div>
                <div className="bg-secondary rounded-lg flex flex-col items-center ml-2 py-4 shadow-lg">
                  <div className="h-40 w-40 rounded-full bg-primary"></div>
                  <h6 className="text-xl font-bold mt-4">PLAIN</h6>
                  <p className="text-2xl font-bold text-yellow-500 mt-2">R90</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
