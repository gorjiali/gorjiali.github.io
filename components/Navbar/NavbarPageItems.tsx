import * as React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAVBAR_PAGE_ITEMS } from '@/components/Navbar/constants';

export default function NavbarPageItems() {
  const router = useRouter();

  return (
    <>
      {NAVBAR_PAGE_ITEMS.map(({ path, title }) => {
        const isActive = router.pathname === path;

        return (
          <li key={path} className="mx-3.5">
            <Link
              href={path}
              className={cn(
                'text-base no-underline text-gray-400 transition-colors duration-200',
                { 'hover:text-gray-500': !isActive },
                { 'text-slate-700': isActive }
              )}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </>
  );
}
