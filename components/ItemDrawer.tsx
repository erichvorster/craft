"use client";

import { useState } from "react";

import { Children } from "react";
// import { Drawer } from "vaul";
import Image, { StaticImageData } from "next/image";
import BeerImg from "../public/beer.png";
import { Skeleton } from "./ui/skeleton";
import { Scroll } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import Btn from "./Btn";

////////////////Fix any
type ItemDrawerProps = {
  children: React.ReactNode;
  img?: any;
  beer?: {
    producer: string;
    alcoholPercentage: number;
    name: string;
    description: string;
    variantPrices?:
      | {
          price: string;
        }[]
      | any;
  };

  //FIX ANY
  food?: any;
};

export function ItemDrawer({ children, img, beer, food }: ItemDrawerProps) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
    console.log(loading, "loading");
  };

  return (
    <Drawer>
      <DrawerTrigger asChild className="text-left">
        <div>{children}</div>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="relative">
          {beer && (
            <>
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-2 mt-4" />
              <div>
                <div className="">
                  <div className="">
                    <Image
                      src={img}
                      alt="beer"
                      layout="fill"
                      objectFit="cover"
                      className="mx-auto p-4"
                    />
                  </div>
                  <div className="m-0 mb-2">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="border-t-2 border-r-2 border-b-2 border-zinc-200 w-[80%] text-3xl p-4">
                            {beer.producer} -
                            <span className="font-bold">{beer.name}</span>
                          </td>
                          <td className="border-t-2 border-r-0 border-b-2 border-zinc-200 w-[20%] text-3xl font-bold text-center">
                            {beer.alcoholPercentage}%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4">
                    <p className="font-bold mb-1">Description</p>
                    <p>{beer.description}</p>
                  </div>
                  {beer.variantPrices !== null && (
                    <table className="w-full border-collapse text-center">
                      <thead>
                        <tr className="font-bold ">
                          <td className="border-t-2 border-r-2 border-b-2 border-zinc-200 p-2 w-[20%]">
                            160ml
                          </td>
                          <td className="border-t-2 border-r-2 border-b-2 border-zinc-200 p-2 w-[20%]">
                            340ml
                          </td>
                          <td className="border-t-2 border-r-2 border-b-2 border-zinc-200 p-2 w-[20%]">
                            500ml
                          </td>
                          <td className="border-t-2 border-r-2 border-b-2 border-zinc-200 p-2 w-[20%]">
                            1L
                          </td>
                          <td className="border-t-2 border-r-0 border-b-2 border-zinc-200 p-2 w-[20%]">
                            2.3L
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="font-bold text-yellow-500/75 text-2xl">
                          <td className="border-r-2 border-b-2 border-zinc-200 py-2">
                            {beer.variantPrices[0].price}
                          </td>
                          <td className="border-r-2 border-b-2 border-zinc-200 py-2">
                            {beer.variantPrices[1].price}
                          </td>
                          <td className="border-r-2 border-b-2 border-zinc-200 py-2">
                            {beer.variantPrices[2].price}
                          </td>
                          <td className="border-r-2 border-b-2 border-zinc-200 py-2">
                            {beer.variantPrices[3].price}
                          </td>
                          <td className="border-r-0 border-b-2 border-zinc-200 py-2">
                            {beer.variantPrices[4].price}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </>
          )}

          {food && (
            <>
              <div>
                <div>
                  <div className="h-[220px] w-[250px] mx-auto relative rounded-lg mt-10">
                    <Image
                      src={img}
                      alt="beer"
                      layout="fill"
                      objectFit="cover"
                      className="mx-auto rounded-lg"
                    />
                  </div>
                  <div className="px-4 text-foreground mt-6">
                    <div className="text-2xl font-bold m-0 mb-2 ">
                      {food.name}
                    </div>
                    <div className="mt-4">
                      <p className="font-bold mb-1 text-card">Description</p>
                      <p className="text-card-foreground text-sm">
                        {food.description}s
                      </p>
                    </div>
                    <div className="bg-popover-foreground text-popover inline-block py-2 px-8 rounded-full mt-5">
                      R{food.fixedPrice.price}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DrawerHeader>

        <DrawerClose className="absolute  top-8 left-5 mx-auto">
          <div className="flex items-center text-popover">
            <ChevronLeft className="text-popover" /> Menu
          </div>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
