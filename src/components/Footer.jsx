import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Need a Professional Web Design:{" "}
            <a href="http://codebycyrus.com/">
              <span className="underline text-blue">Go To Main Website </span>
            </a>
            or{" "}
            <a href="https://www.linkedin.com/in/mohammad-makaremnejad/">
              <span className="underline text-blue">LinkedIn</span>
            </a>{" "}
            .
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 0098-9300099025
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <a href="http://codebycyrus.com/">
            <p className="font-semibold text-gray text-xs">
              Copright @ 2024 CodebyCyrus.com | Mohammad Makaremnejad.
            </p>
          </a>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
