import React, { useRef } from "react";
import MenuItems from "../data/menu";
import BeerImg from "../public/beer.png";
import Image from "next/image";

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
      <Accordion type="single" collapsible>
        {MenuItems.drinks.iceColdBeer.items.map((beer, idx) => (
          <AccordionItem value={`item-${idx}`} key={idx}>
            <AccordionTrigger className="py-1  text-lg">
              <span className="mr-3">{beer.id}</span>
              {beer.producer} - <strong> {beer.name}</strong>
              <span className="ml-2"> - {beer.alcoholPercentage}%</span>
            </AccordionTrigger>
            <AccordionContent className="border-2 border-black mb-12">
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
                        <td className="border-t-2 border-r-2 border-b-2 border-black w-[80%] text-3xl p-4">
                          {beer.producer} -
                          <span className="font-bold">{beer.name}</span>
                        </td>
                        <td className="border-t-2 border-r-0 border-b-2 border-black w-[20%] text-3xl font-bold text-center">
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
                      <td className="border-t-2 border-r-2 border-b-2 border-black p-2 w-[20%]">
                        160ml
                      </td>
                      <td className="border-t-2 border-r-2 border-b-2 border-black p-2 w-[20%]">
                        340ml
                      </td>
                      <td className="border-t-2 border-r-2 border-b-2 border-black p-2 w-[20%]">
                        500ml
                      </td>
                      <td className="border-t-2 border-r-2 border-b-2 border-black p-2 w-[20%]">
                        1L
                      </td>
                      <td className="border-t-2 border-r-0 border-b-2 border-black p-2 w-[20%]">
                        2.3L
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="font-bold text-yellow-500/75 text-2xl">
                      <td className="border-r-2 border-b-2 border-black py-2">
                        {beer.variantPrices[0].price}
                      </td>
                      <td className="border-r-2 border-b-2 border-black py-2">
                        {beer.variantPrices[1].price}
                      </td>
                      <td className="border-r-2 border-b-2 border-black py-2">
                        {beer.variantPrices[2].price}
                      </td>
                      <td className="border-r-2 border-b-2 border-black py-2">
                        {beer.variantPrices[3].price}
                      </td>
                      <td className="border-r-0 border-b-2 border-black py-2">
                        {beer.variantPrices[4].price}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

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
