import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MoneyLens | Home",
  description: "Seamless banking | zero hassel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
   <main>
     Sidebar
     {children}
   </main>
   
  );
}
