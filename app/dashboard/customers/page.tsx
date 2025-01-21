import React, { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import { CardsSkeleton } from "@/app/ui/skeletons";
import CardWrapper from "@/app/ui/dashboard/cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
       Our Customers
      </h1>
      <Suspense fallback={<CardsSkeleton/>}>
      <CardWrapper/>
      </Suspense>
    </main>
  );
};
