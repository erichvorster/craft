"use client";

import { Children } from "react";
import { Drawer } from "vaul";
import Image, { StaticImageData } from "next/image";
////////////////Fix any
type ItemDrawerProps = {
  children: React.ReactNode;
  image?: any;
};

//scroll down one pixel function
function scrollDownOnePixel() {
  window.scrollBy(0, 1);
}

export function ItemDrawer({ children, image }: ItemDrawerProps) {
  return (
    <div className="z-10">
      <Drawer.Root>
        <div onClick={scrollDownOnePixel}>
          <Drawer.Trigger asChild>
            <div>{children}</div>
          </Drawer.Trigger>
        </div>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-50">
            <div className="p-4 bg-white rounded-t-[10px] flex-1  max-h-[80vh] ">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <Image
                src={image}
                height={400}
                width={400}
                alt="string"
                className="mx-auto mb-8 rounded-lg"
              />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
