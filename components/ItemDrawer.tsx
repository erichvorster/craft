"use client";

import { Children } from "react";
import { Drawer } from "vaul";

type ItemDrawerProps = {
  children: React.ReactNode;
};

export function ItemDrawer({ children }: ItemDrawerProps) {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button>
          <>{children}</>
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto max-h-[600px]">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="h-64 w-full bg-primary rounded-lg relative"></div>
            <div className="flex justify-between items-center mt-8">
              <h3 className="text-4xl font-bold  text-primary">
                Snack Item Name
              </h3>
              <p className="text-yellow-500/75 text-5xl font-bold">R99</p>
            </div>
            <div className="flex mt-6">
              <p className=" px-4 py-1 rounded-full text-sm bg-yellow-300/75  mr-2">
                Jalapeno
              </p>
              <p className=" px-4 py-1 rounded-full text-sm bg-yellow-300/75  mr-2">
                Cheese Sauce
              </p>
              <p className=" px-4 py-1 rounded-full text-sm bg-yellow-300/75  mr-2">
                Mustard
              </p>
            </div>
            <div className="text-start text-md mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur repudiandae, voluptatibus aliquam, explicabo amet
              facere quam quaerat illum veniam adipisci provident magni iusto
              nostrum dicta ullam consequuntur numquam corporis ad in veritatis
              eum! Sunt, a dolorum in voluptatum non accusamus. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Vero cumque officia
              fugit deleniti unde ipsum quam voluptatibus ut minus asperiores,
              nulla adipisci est esse id! Totam, eveniet voluptatum. Impedit,
              maiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur repudiandae, voluptatibus aliquam, explicabo amet
              facere quam quaerat illum veniam adipisci provident magni iusto
              nostrum dicta ullam consequuntur numquam corporis ad in veritatis
              eum! Sunt, a dolorum in voluptatum non accusamus. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Vero cumque officia
              fugit deleniti unde ipsum quam voluptatibus ut minus asperiores,
              nulla adipisci est esse id! Totam, eveniet voluptatum. Impedit,
              maiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur repudiandae, voluptatibus aliquam, explicabo amet
              facere quam quaerat illum veniam adipisci provident magni iusto
              nostrum dicta ullam consequuntur numquam corporis ad in veritatis
              eum! Sunt, a dolorum in voluptatum non accusamus. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Vero cumque officia
              fugit deleniti unde ipsum quam voluptatibus ut minus asperiores,
              nulla adipisci est esse id! Totam, eveniet voluptatum. Impedit,
              maiores?
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
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
