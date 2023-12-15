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
import CategoryHeader from "./CategoryHeader";

const Beer = () => {
  // Generate an array of beer items for demonstration purposes
  let beers = [];
  for (let i = 1; i <= 20; i++) {
    beers.push(i);
  }

  return (
    <>
      <div className="mt-20">
        <CategoryHeader
          headerText="Beer On Tap"
          subText="This is the sub text for the beer on tap"
        />
        {MenuItems.drinks.iceColdBeer.items.map((beer, idx) => (
          <ItemDrawer beer={beer}>
            <p className="py-1  text-sm">
              <span className="mr-3">{beer.id}</span>
              {beer.producer} - <strong> {beer.name}</strong>
              <span className="ml-2"> - {beer.alcoholPercentage}%</span>
            </p>
          </ItemDrawer>
        ))}
      </div>
      <div className="mt-20">
        <CategoryHeader
          headerText="Floating & Limited Beers"
          subText="Rare and interesting finds. They are in small
          quantities & therefore only available while stocks last."
        />
        {MenuItems.drinks.floatingBeer.items.map((beer, idx) => (
          <ItemDrawer beer={beer}>
            <p className="py-1  text-sm">
              <span className="mr-3">{beer.id}</span>
              {beer.producer} - <strong> {beer.name}</strong>
              <span className="ml-2"> - {beer.alcoholPercentage}%</span>
            </p>
          </ItemDrawer>
        ))}
      </div>
    </>
  );
};

export default Beer;
