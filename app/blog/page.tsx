import { Card, CardContent } from "@/components/ui/card";

export default function BlogPage() {
  return (
    <main className="pb-16 pt-24">
      <section className="container">
        <h1 className="text-[5rem] leading-none">Blog</h1>
      </section>

      <section className="container mt-10">
        <Card className="mx-auto max-w-3xl">
          <CardContent className="flex min-h-32 items-center justify-start p-6">
            <span className="sr-only">Blog content coming soon</span>
            <span className="blog-cursor" aria-hidden="true" />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
