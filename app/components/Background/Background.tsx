import React from "react";
import { Flour } from "../Icons";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <Flour className="fixed left-1/3 bottom-0 w-[25rem] opacity-20 z-under" />
      <Flour className="fixed right-1/4 top-0 w-[25rem] opacity-20 z-under" />
      {children}
    </div>
  );
}
