"use client";

import { usePathname } from "next/navigation";
import { Button } from "./button";

import Link from "next/link";

interface SidebarButtonProps {
  href: string;
  children: React.ReactNode;
}

export const SidebarButton = ({ href, children }: SidebarButtonProps) => {
  const pathname = usePathname();
  return (
    <Button
      variant={pathname === `${href}` ? "secondary" : "ghost"}
      className="justify-start"
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
