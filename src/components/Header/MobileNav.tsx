import Link from "next/link";
import React from "react";

interface MobileNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ open, setOpen }: MobileNavProps) {
  if (!open) return null;

  const links: string[] = [
    "Rooms & Suites",
    "Wedding",
    "Meeting & Events",
    "Claridge Events & Promotions",
    "Dining & Bars",
    "Amenities",
    "More",
  ];

  return (
    <div className="xl:hidden bg-white w-full shadow-lg text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
        {links.map((label) => (
          <Link
            key={label}
            href="#"
            onClick={() => setOpen(false)}
            className="text-base hover:underline"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
