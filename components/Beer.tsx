import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Beer = () => {
  let beers = [];

  for (let i = 1; i <= 40; i++) {
    beers.push(i);
  }

  return (
    <Accordion type="single" collapsible>
      {beers.map((beer, idx) => (
        <AccordionItem value={`item-${idx}`}>
          <AccordionTrigger className="py-1  text-xl">
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
            Agar’s Tomahawk IPA is a hop-head’s delight, exuberantly unbalanced
            with aggressive bitterness and juicy, citrusy hop flavours. The malt
            profile is generally clean and simple with just enough caramel
            sweetness to provide support.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Beer;
