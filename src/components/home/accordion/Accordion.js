import React, { useState } from "react";
import Collapse from "react-native-collapsible/Accordion";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";

const data = [
  {
    title: "Reach your next level",
    content: [
      {
        heading: "Seller Seniority",
        description: "Complete at least 60 days as a New Seller",
        points: "60 / 60",
      },
      {
        heading: "Orders",
        description: "Receive and complete at least 10 orders (all time)",
        points: "10 / 10",
      },
      {
        heading: "Earnings",
        description: "Earn at least $400 from completed orders (all time)",
        points: "$400 / $400",
      },
      {
        heading: "Days Without Warnings",
        description:
          "Avoid receiving warnings for TOS violations over the course of 30 days",
        points: "30 / 30",
      },
    ],
  },
];

const Accordion = () => {
  const [active, setActive] = useState([]);
  const [showDownIcon, setShowDownIcon] = useState(false);
  return (
    <Collapse
      activeSections={active}
      sections={data}
      renderHeader={(section) => (
        <AccordionHeader section={section} showDownIcon={showDownIcon} />
      )}
      renderContent={(section) => (
        <AccordionContent content={section.content} />
      )}
      onChange={(item) => {
        setActive(item);
        setShowDownIcon(!showDownIcon);
      }}
    />
  );
};

export default Accordion;
