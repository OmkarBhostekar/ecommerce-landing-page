import React from "react";

const Links = () => {
  const list = [
    {
      id: 1,
      title: "Company",
      links: ["About", "Contact us", "Support", "Careers"],
    },
    {
      id: 2,
      title: "Quick Link",
      links: ["Share Location", "Orders Tracking", "Size Guide", "FAQs"],
    },
    {
      id: 3,
      title: "Legal",
      links: ["Terms & Conditions", "Privacy Policy"],
    },
  ];

  return (
    <div className="flex grid-cols-3 justify-between flex-grow">
      {list.map((category) => (
        <div className="" key={category.id}>
          <p className="text-[#D9D9D9] text-md font-semibold">
            {category.title}
          </p>
          {category.links.map((text) => (
            <p className="text-[#8E8E8E] text-md mt-4 cursor-pointer">{text}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Links;
