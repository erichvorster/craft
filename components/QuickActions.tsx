import React from "react";
import { UtensilsCrossed, Beer, Gem, CalendarRange } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mb-24">
      <div className="p-6 bg-popover-foreground rounded-lg text-lg text-popover">
        <UtensilsCrossed className="h-8 w-8 mb-4" />
        Food
      </div>
      <div className="p-6 bg-popover-foreground rounded-lg text-lg text-popover">
        <Beer className="h-8 w-8 mb-4 " />
        Drinks
      </div>
      <div className="p-6 bg-popover-foreground rounded-lg text-lg text-popover">
        <Gem className="h-8 w-8 mb-4" />
        Specials
      </div>
      <div className="p-6 bg-popover-foreground rounded-lg text-lg text-popover">
        <CalendarRange className="h-8 w-8 mb-4 " />
        Events
      </div>
    </div>
  );
};

export default QuickActions;
