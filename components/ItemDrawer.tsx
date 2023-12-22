"use client";

import { useState } from "react";

import { Children } from "react";
import { Drawer } from "vaul";
import Image, { StaticImageData } from "next/image";
import BeerImg from "../public/beer.png";
import { Skeleton } from "./ui/skeleton";
import { ScrollArea } from "./ui/scroll-area";
import { Scroll } from "lucide-react";
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
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <div>{children}</div>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-background text-zinc-200 flex flex-col rounded-t-[10px] h-[96%]  fixed bottom-0 left-0 right-0 z-40">
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
              <div className="mx-auto w-24 h-1 flex-shrink-0 rounded-full bg-card-foreground absolute left-1/2 transform -translate-x-1/2 z-50 top-4" />
              <ScrollArea>
                <div>
                  <div className="">
                    <div className="h-[340px] w-auto relative rounded-lg mt-10 mx-2">
                      <Image
                        src={img}
                        alt="beer"
                        layout="fill"
                        objectFit="cover"
                        className="mx-auto rounded-lg"
                      />
                    </div>
                    <div className="px-6 text-foreground mt-10">
                      <div className="text-3xl font-bold m-0 mb-2 ">
                        {food.name}
                      </div>
                      <div className="mt-4">
                        <p className="font-bold mb-1 text-card">Description</p>
                        <p className="text-card-foreground">
                          {food.description}
                        </p>
                      </div>
                      <div className="bg-popover-foreground text-popover inline-block py-2 px-8 rounded-full mt-5">
                        R{food.fixedPrice.price}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
