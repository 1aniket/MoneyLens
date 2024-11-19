"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="icons/hamburger.svg" width={30} height={30} />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white ">
          <Link
            href="/"
            className="flex mb-12 cursor-pointer items-center gap-2"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Logo"
              className="size-[24px]
        max-xl:size-14"
            />
            <h1 className="text-26 text-black-1 font-ibm-plex-serif font-bold">
              MoneyLens
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathName === item.route ||
                    pathName.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
<Link
                      key={item.label}
                      href={item.route}
                      className={cn("mobilenav-sheet_close", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                      
                        <Image
                          src={item.imgURL}
                          height={20}
                          width={20}
                          alt={item.label}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        ></Image>
                    
                      <p
                        className={cn("text-16 font-semibold text-black-2", {
                          "!text-white": isActive,
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                    </SheetClose>
                    
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
