import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header"
import React from "react";


export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
