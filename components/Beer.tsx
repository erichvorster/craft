import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BeerHeader from "./BeerHeader";

const Beer = () => {
  let beers = [];

  for (let i = 1; i <= 20; i++) {
    beers.push(i);
  }

  return (
    <>
      <Accordion type="single" collapsible>
        {beers.map((beer, idx) => (
          <AccordionItem value={`item-${idx}`}>
            <AccordionTrigger className="py-1  text-lg">
              <span className="mr-3">{idx + 1}</span>Agar's -{" "}
              <strong>Tomohawk IPA</strong>
              <span className="ml-2"> - 7%</span>
            </AccordionTrigger>
            <AccordionContent className="bg-neutral-200 rounded-md mb-4 p-4">
              <div className="rounded-md border bg-neutral-300 p-0 m-0 mb-2">
                <table className="w-full border-collapse text-center my-2 ">
                  <thead>
                    <tr className="font-bold">
                      <td>160ml</td>
                      <td>340ml</td>
                      <td>500ml</td>
                      <td>1L</td>
                      <td>2.3L</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="font-bold text-yellow-500/75 text-lg">
                      <td>25</td>
                      <td>50</td>
                      <td>65</td>
                      <td>120</td>
                      <td>250</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              Agar’s Tomahawk IPA is a hop-head’s delight, exuberantly
              unbalanced with aggressive bitterness and juicy, citrusy hop
              flavours. The malt profile is generally clean and simple with just
              enough caramel sweetness to provide support.
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
