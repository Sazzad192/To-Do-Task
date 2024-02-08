import NavLinks from "@/app/components/NavLinks";
import Link from "next/link";

function BaseNavbar() {
  return (
    <nav className="sticky top-0 p-4 bg-white border-b border-gray-200 lg:border-none">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <div className="flex items-center gap-10">
          <Link className="font-semibold text-lg" href="/">
            ToDo
          </Link>
        </div>
        <div id="nav link">
          <NavLinks/>
        </div>
      </div>
    </nav>
  );
}

export default BaseNavbar;
