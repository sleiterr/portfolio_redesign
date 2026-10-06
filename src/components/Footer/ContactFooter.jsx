import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const contactData = [
  {
    id: 1,
    href: "mailto:sleite4r@gmail.com",
    text: "oleg4troian@ gmail.com",
    clasName: "font-light text-sm tracking-wider text-secondary",
    icon: <AiOutlineMail className="text-white w-4 h-4" />,
    className: "footer-item flex items-center gap-2",
  },
  {
    id: 2,
    href: "tel:+45 53 77 01 76",
    text: "+45 53 77 01 76",
    clasName: "font-light text-sm tracking-wider text-secondary",
    icon: <BsTelephone className="text-white w-4 h-4" />,
    className: "footer-item flex items-center justify-center gap-2",
  },
];

export const ContactFooter = () => {
  return (
    <ul className="flex flex-col items-start lg:flex-row lg:items-center justify-center gap-2 lg:gap-6">
      {contactData
        .filter((item) => item.id !== 2)
        .map((item) => (
          <li key={item.id} className={item.className}>
            {item.icon}
            <a href={item.href} className={item.clasName}>
              {item.text}
            </a>
          </li>
        ))}
    </ul>
  );
};
