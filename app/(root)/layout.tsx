import type { Metadata } from "next";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";


export const metadata: Metadata = {
  title: "MoneyLens | Home",
  description: "Seamless banking | zero hassel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName:"Aniket",
    lastName:"Bhogawar"
  }
  return (
    
   <main className="flex h-screen w-full font-inter">
     <Sidebar user={loggedIn}/>

     <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg"
        width={30}
        height={30}
        alt="menu-icon" />
        <div>
          <MobileNav user={loggedIn}/>
        </div>
      </div>
      {children}
     </div>
     

   </main>
   
  );
}
