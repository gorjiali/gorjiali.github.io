import * as React from 'react';
import { NAVBAR_ANCHOR_ITEMS } from '@/components/Navbar/constants';

export default function NavbarAnchorItems() {
  return (
    <>
      {NAVBAR_ANCHOR_ITEMS.map((item) => (
        <li key={item.href} className="mx-2">
          <a href={item.href} rel="noreferrer" target="_blank">
            <item.icon className="text-xl text-gray-400 hover:text-gray-500 transition-colors duration-200" />
          </a>
        </li>
      ))}
    </>
  );
}
