import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
const ShowFooterLinks = ({ links, external }) => {
  return links.map((link) => (
    <ul className="footer__ul" key={link.id}>
      <li className="footer__ul__li">
        {external ? (
          <>
            <BsChevronRight size={12} />
            <a href={link.route} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </>
        ) : (
          <>
            <BsChevronRight size={12} />
            <Link href={link.route}>{link.name}</Link>
          </>
        )}
      </li>
    </ul>
  ));
};
export default ShowFooterLinks;
