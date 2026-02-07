import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const links = [
  { href: "https://www.linkedin.com/in/maximedupuy/en", label: "LinkedIn" },
  { href: "https://github.com/maxoududu", label: "GitHub" },
  { href: "https://twitter.com/maxoududu", label: "X" },
  { href: "mailto:contact@maximedupuy.dev", label: "Email" }
];

export default function AboutPage() {
  return (
    <main className="pb-16 pt-24">
      <section className="container">
        <h1 className="text-[5rem] leading-none">About me</h1>
      </section>

      <section className="container mt-10">
        <Card className="mx-auto max-w-4xl rounded-[2rem] border-2">
          <CardContent className="p-8">
            <div className="mb-4 flex justify-center">
              <Avatar className="h-[50px] w-[50px]">
                <AvatarImage src="https://github.com/maxoududu.png" alt="@maxoududu" />
              </Avatar>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg">
              {links.map((link, index) => (
                <div key={link.label} className="flex items-center gap-3">
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-foreground hover:text-muted-foreground"
                  >
                    {link.label}
                  </a>
                  {index < links.length - 1 ? (
                    <span className="text-muted-foreground" aria-hidden="true">
                      •
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container mt-6">
        <Card className="mx-auto max-w-4xl rounded-[2rem] border-2">
          <CardContent className="space-y-4 p-8 text-lg leading-relaxed">
            <p>
              Software Engineer currently working at Hyatt as a Senior Manager Product Engineering - Full Stack.
            </p>
            <p>
              I hold a double degree in Computer Science from the Illinois Institute of Technology
              and ESIEA Paris, with a specialization in Information Security.
            </p>

          </CardContent>
        </Card>
      </section>
    </main>
  );
}
