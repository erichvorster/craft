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
          <AccordionTrigger className="py-1">
            Agar's - <strong>Tomohawk IPA</strong>
            <span>7%</span>
          </AccordionTrigger>
          <AccordionContent>
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
