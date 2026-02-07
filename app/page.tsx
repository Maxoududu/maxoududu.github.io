import type { CSSProperties } from "react";

export default function HomePage() {
  const name = "Maxime Dupuy";
  const typingStyle = { "--type-chars": name.length } as CSSProperties;

  return (
    <main className="container flex min-h-screen items-center justify-center pt-16">
      <h1 className="text-center text-[5rem] leading-none md:text-[7rem]">
        <span className="typing-name" style={typingStyle}>
          <span className="typing-text">{name}</span>
        </span>
      </h1>
    </main>
  );
}
