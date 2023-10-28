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
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40 " />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-50 ">
            <div className="p-4 bg-neutral-200 rounded-t-[10px] flex-1  min-h-[70vh] max-h-[80vh] overflow-y-scroll">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <Image
                src={image}
                height={300}
                width={300}
                alt="string"
                className="mb-8 rounded-lg mx-auto card-shadow"
              />
              <div className="px-2 pb-8">
                <h4 className="text-4xl font-bold">Menlo Vinyl Record Fair</h4>
                <p className="text-2xl mt-2 text-yellow-500/75">
                  Free every 1st Sudnay from <u className="text-black">10:00</u>{" "}
                  to <u className="text-black">14:00</u>
                </p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid necessitatibus quae repudiandae tenetur explicabo
                  tempore maiores totam nisi sunt qui, cupiditate veniam
                  excepturi ipsam? A aspernatur in neque, totam veniam nostrum
                  similique saepe doloribus expedita omnis ducimus inventore
                  suscipit ad!
                  <br />
                  <br /> Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Dolorem quaerat facilis alias quam officia est maxime
                  unde minima porro ipsa.
                </p>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
