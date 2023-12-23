import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import { foodTabs, drinkTabs } from "./Helpers";

const Footer = () => {
  return (
    <>
      <div className=" bg-background mt-28 px-6 pt-12 pb-6 pb-24 border-t border-popover">
        <div className="flex items-center mb-8">
          <img src="/download.png" alt="logo" width="35" height="35" />
          <p className="text-card-foreground ml-2 text-sm">© 2023</p>
        </div>
        <Accordion type="single" collapsible className="text-white">
          <AccordionItem value="item-1">
            <AccordionTrigger>Food</AccordionTrigger>
            <AccordionContent>
              {foodTabs.map((tab, index) => (
                <div className="flex flex-col ">
                  <p className="text-sm py-2 pl-3 text-card-foreground">
                    {tab}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Drinks</AccordionTrigger>
            <AccordionContent>
              {drinkTabs.map((tab, index) => (
                <div className="flex flex-col ">
                  <p className="text-sm py-2 pl-3 text-card-foreground">
                    {tab}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div>
          <p
            className=" text-foregrond
          py-4"
          >
            Events
          </p>
          <Separator className="bg-card-foreground" />
          <p
            className=" text-foregrond
          py-4"
          >
            Bookings
          </p>
          <Separator className="bg-card-foreground" />
          <p
            className=" text-foregrond
          py-4"
          >
            Contact
          </p>
          <Separator className="bg-card-foreground" />
        </div>
        <div className="text-center mt-24">
          <p className="text-card-foreground text-sm">Powered by Menq</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
