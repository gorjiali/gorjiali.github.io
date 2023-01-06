import * as React from 'react';
import cn from 'classnames';
import { RxHamburgerMenu } from 'react-icons/rx';
import NavbarAnchorItems from '@/components/Navbar/NavbarAnchorItems';
import NavbarPageItems from '@/components/Navbar/NavbarPageItems';

export default function Navbar() {
  const [menu, setMenu] = React.useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-end mx-auto">
        <button
          type="button"
          className="p-2 ml-3 md:hidden"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu className="text-2xl text-gray-500" />
        </button>
        <div
          className={cn('w-full md:block md:w-auto', {
            hidden: !menu,
          })}
        >
          <ul className="flex flex-col items-center p-4 md:flex-row md:text-sm md:font-medium md:border-0">
            <NavbarPageItems />
            <NavbarAnchorItems />
          </ul>
        </div>
      </div>
    </nav>
  );
}
