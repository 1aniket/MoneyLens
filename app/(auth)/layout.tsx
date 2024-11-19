import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MoneyLens | Onboarding",
  description: "Seamless banking | zero hassel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
   <main>
    Topbar
     {children}
   </main>
   
  );
}
