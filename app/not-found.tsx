import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-4 pt-16 text-center">
      <h1 className="text-[7rem] leading-none md:text-[10rem]">404</h1>
      <p className="max-w-2xl text-2xl md:text-4xl">Page not found</p>
      <Link href="/" className="mt-2 text-lg text-muted-foreground hover:text-foreground">
        Back to home
      </Link>
    </main>
  );
}
