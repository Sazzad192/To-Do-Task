"use client";

import { useState } from "react";
import Link from "next/link";
import RightSideDrawer from "@/components/RightSideDrawer";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Task List", url: "/tasks" },
  { label: "Create Task", url: "/tasks/create" },
];

export default function NavLinks() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeRoute = usePathname();
  const isActiveRoute = (activeNavLink) => activeRoute === activeNavLink;

  return (
    <div className="flex items-center gap-4">
      <Bars4Icon
        onClick={() => setDrawerOpen(true)}
        className="block h-7 w-7 cursor-pointer md:hidden"
        aria-hidden="true"
      />
      {navLinks.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className={`hidden md:flex text-gray-600 hover:bg-gray-50 hover:text-gray-900 group items-center px-3 py-2 text-sm font-medium rounded-md ${
            isActiveRoute(item.url) &&
            "bg-primary-100 hover:bg-primary-100 text-primary hover:text-primary"
          }`}
        >
          {item.label}
        </Link>
      ))}

      <RightSideDrawer title="ToDo" open={drawerOpen} setOpen={setDrawerOpen}>
        <div className="">
          {navLinks.map((item, i) => (
            <Link
            key={i}
              href={item.url}
              className={`text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                isActiveRoute(item.url) &&
                "bg-primary-100 hover:bg-primary-100 text-primary hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </RightSideDrawer>
    </div>
  );
}
