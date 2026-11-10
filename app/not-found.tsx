import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col justify-end px-6 py-16 sm:px-12">
      <p className="text-sm text-sand">404</p>
      <h1 className="mt-5 max-w-[12ch] font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-7xl">
        Nothing filed at this address.
      </h1>
      <Link
        href="/"
        className="mt-8 w-fit link"
      >
        Back to Qodiriy Aqlliev
      </Link>
    </main>
  );
}
