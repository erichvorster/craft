import React, { useRef } from "react";
import MenuItems from "../data/menu";
import BeerImg from "../public/beer.png";
import Image from "next/image";
import Carousel from "./Carousel";
import { ItemDrawer } from "./ItemDrawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BeerHeader from "./BeerHeader";

const Beer = () => {
  // Generate an array of beer items for demonstration purposes
  let beers = [];
  for (let i = 1; i <= 20; i++) {
    beers.push(i);
  }

  return (
    <>
      {MenuItems.drinks.iceColdBeer.items.map((beer, idx) => (
        <ItemDrawer beer={beer}>
          <p className="py-1  text-lg">
            <span className="mr-3">{beer.id}</span>
            {beer.producer} - <strong> {beer.name}</strong>
            <span className="ml-2"> - {beer.alcoholPercentage}%</span>
          </p>
        </ItemDrawer>
      ))}

      <div className="mt-20">
        <BeerHeader
          title="FLOATING & LIMITED BEERS"
          desc="Rare and interesting finds. They are in small quantities & therefore
        only available while stocks last."
        />
        {beers.map((itm, idx) => (
          <div className="flex justify-between">
            <div className="flex text-lg font-bold">
              <span className="mr-2 font-normal">{idx + 40}</span> CREW Republic
              (DE) - Drunken Sailor IPA
              <span className="font-normal">- 330ml</span> - 6.4%
            </div>
            <div>
              <p className="font-bold text-yellow-500/75">R65</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <BeerHeader
          title="NON-ALCOHOLIC BEER"
          desc="Rare and interesting finds. They are in small quantities & therefore
        only available while stocks last."
        />
        {beers.map((itm, idx) => (
          <div className="flex justify-between">
            <div className="flex text-lg font-bold">
              <span className="mr-2 font-normal">{idx + 40}</span> CREW Republic
              (DE) - Drunken Sailor IPA
              <span className="font-normal">- 330ml</span> - 6.4%
            </div>
            <div>
              <p className="font-bold text-yellow-500/75">R65</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <BeerHeader title="NON-ALCOHOLIC BEER" />
        {beers.map((itm, idx) => (
          <div className="flex justify-between">
            <div className="flex text-lg font-bold">
              <span className="mr-2 font-normal">{idx + 40}</span> CREW Republic
              (DE) - Drunken Sailor IPA
              <span className="font-normal">- 330ml</span> - 6.4%
            </div>
            <div>
              <p className="font-bold text-yellow-500/75">R65</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <BeerHeader
          title="LAGERS"
          desc="A bottom fermenting beer brewed at colder temperatures and usually brewed for longer. One of the most common and popular beer styles. "
        />
        {beers.map((itm, idx) => (
          <div className="flex justify-between">
            <div className="flex text-lg font-bold">
              <span className="mr-2 font-normal">{idx + 40}</span> CREW Republic
              (DE) - Drunken Sailor IPA
              <span className="font-normal">- 330ml</span> - 6.4%
            </div>
            <div>
              <p className="font-bold text-yellow-500/75">R65</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Beer;
