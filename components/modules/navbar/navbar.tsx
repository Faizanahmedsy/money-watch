import React from "react";
import { ThemeToggle } from "../../dark-mode-toggle";
import { Button } from "@/components/ui/button";
import NavLinks from "./_components/nav-links";
import { navLinks } from "@/constants/data";

const NavigationBar = () => {
  return (
    <>
      <div className=" xl:my-2 lg:my-2 bg-orange-200 dark:bg-inherit">
        <nav className="flex justify-between items-center px-10 py-5">
          <div className="font-mono w-[150px]">portfolio-v8</div>

          <div className="xl:flex lg:flex md:flex ~hidden  gap-x-10 items-center text-sm">
            {navLinks.map((link, index) => (
              <NavLinks
                key={index}
                // icon={link.icon}
                href={link.href}
                text={link.text}
              />
            ))}
          </div>

          <div className="w-[150px]">
            <div className="flex items-center justify-end">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
