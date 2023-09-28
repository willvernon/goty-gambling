'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

import s from './Navbar.module.css';
import { createServerSupabaseClient } from '@/app/supabase-server';
import SignOutButton from '../Navbar/SignOutButton';
//import { cn } from '@/lib/utils'
//import Button from '@/components/ui/Button';

const navItems = {
  '/': {
    name: 'home'
  },
  '/models': {
    name: 'models'
  },
  '/contact': {
    name: 'contact'
  }
};

export default async function DashNav() {
  let pathname = usePathname() || '/';
  // if (pathname.includes('/blog/')) {
  //   pathname = '/blog';
  // }
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <aside className="md:ml-[12px] mb-16  tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative px-0 pb-0 fade  md:relative"
            id="nav"
          >
            <div className="flex flex-row space-x-0 mx-auto my-4 text-neutral-700">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all  hover:text-[#6756ED] dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive
                      }
                    )}
                  >
                    <span className="relative py-1 px-2">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-800 dark:bg-neutral-300 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
              {/* <div className="block md:hidden pl-4 "> */}
              {/*   <UserButton afterSignOutUrl="/" /> */}
              {/* </div> */}
            </div>

            <div className="flex justify-end flex-1 space-x-8">
              {user ? (
                <SignOutButton />
              ) : (
                <Link href="/signin" className={s.link}>
                  Sign in
                </Link>
              )}
            </div>
            {/* <div className="hidden md:block lg:absolute lg:right-0 space-x-0 lg:px-10 mt-4 items-centers text-neutral-700"> */}
            {/*   <UserButton afterSignOutUrl="/" /> */}
            {/* </div> */}
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
