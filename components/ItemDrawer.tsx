"use client";

import { useState } from "react";

import { Children } from "react";
import { Drawer } from "vaul";
import Image, { StaticImageData } from "next/image";
import BeerImg from "../public/beer.png";
import { Skeleton } from "./ui/skeleton";
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
        <Drawer.Content className="bg-popover text-zinc-200 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          {/* {beer && (
            <>
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-4 mt-4" />
              <div>
                <div className="">
                  <div className="">
                    {loading ? (
                      <Skeleton className="w-[350px] h-[300px] rounded-lg bg-neutral-700 mx-auto mb-4" />
                    ) : (
                      <Image
                        src={img}
                        alt="beer"
                        fill
                        className="mx-auto pt-4"
                        onLoad={handleImageLoad}
                      />
                    )}
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
                </div>
              </div>
            </>
          )} */}

          {food && (
            <>
              <div className="mx-auto w-24 h-1 flex-shrink-0 rounded-full bg-zinc-300 mb-4 mt-4" />
              <div>
                <div className="">
                  <div className="">
                    {loading === true ? (
                      <Skeleton className="w-[350px] h-[300px] rounded-lg bg-neutral-700 mx-auto mb-4" />
                    ) : (
                      <Image
                        src={img}
                        alt="beer"
                        width={250}
                        className="mx-auto pt-4"
                        onLoad={handleImageLoad}
                      />
                    )}
                  </div>
                  <div className="m-0 mb-2">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="border-t-2 border-r-2 border-b-2 border-zinc-200 w-[80%] text-3xl p-4">
                            {food.name}
                          </td>
                          <td className="border-t-2 border-r-0 border-b-2 border-zinc-200 w-[20%] text-3xl font-bold text-foreground text-center text-black bg-yellow-500">
                            R{food.fixedPrice.price}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4">
                    <p className="font-bold mb-1">Description</p>
                    <p>{food.description}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
