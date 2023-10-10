"use client";
import { Menu, Sparkles} from "lucide-react";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const font = Poppins ({
   weight:"600",
   subsets:["latin"]
});
const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Menu className="block md:hidden"/>
          <Link href="/">
            <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}> companion.ai</h1>
          </Link>
      </div>
      <div className="flex items-center gap-x-3">
         <Button size='sm'>
            Upgrade
            <Sparkles className="h- w-4 fill-white text-white ml-2" />
         </Button>
         <UserButton/>
      </div>
    </div>
  );
};

export default Navbar;