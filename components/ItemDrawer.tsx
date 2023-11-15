"use client";

import { Children } from "react";
import { Drawer } from "vaul";
import Image, { StaticImageData } from "next/image";
import BeerImg from "../public/beer.png";
////////////////Fix any
type ItemDrawerProps = {
  children: React.ReactNode;
  image?: any;
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
  food?: string;
};

export function ItemDrawer({ children, image, beer, food }: ItemDrawerProps) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <div>{children}</div>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-popover text-zinc-200 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-4 mt-4" />
          {beer && (
            <div>
              <div className="">
                <div className="">
                  <Image
                    src={BeerImg}
                    alt="beer"
                    width={250}
                    className="mx-auto pt-4"
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
          )}

          {food && (
            <>
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-4">
                    Unstyled drawer for React.
                  </Drawer.Title>
                  <p className="text-zinc-600 mb-2">
                    This component can be used as a replacement for a Dialog on
                    mobile and tablet devices.
                  </p>
                  <p className="text-zinc-600 mb-8">
                    It uses{" "}
                    <a
                      href="https://www.radix-ui.com/docs/primitives/components/dialog"
                      className="underline"
                      target="_blank"
                    >
                      Radix&apos;s Dialog primitive
                    </a>{" "}
                    under the hood and is inspired by{" "}
                    <a
                      href="https://twitter.com/devongovett/status/1674470185783402496"
                      className="underline"
                      target="_blank"
                    >
                      this tweet.
                    </a>
                  </p>
                </div>
              </div>
              <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
                <div className="flex gap-6 justify-end max-w-md mx-auto">
                  <a
                    className="text-xs text-zinc-600 flex items-center gap-0.25"
                    href="https://github.com/emilkowalski/vaul"
                    target="_blank"
                  >
                    GitHub
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <a
                    className="text-xs text-zinc-600 flex items-center gap-0.25"
                    href="https://twitter.com/emilkowalski_"
                    target="_blank"
                  >
                    Twitter
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="w-3 h-3 ml-1"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
