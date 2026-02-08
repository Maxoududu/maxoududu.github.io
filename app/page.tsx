import type { CSSProperties } from "react";

export default function HomePage() {
  const name = "Maxime Dupuy";
  const typingStyle = { "--type-chars": name.length } as CSSProperties;

  return (
    <main className="container mt-16 flex min-h-[calc(100svh-4rem)] items-center justify-center">
      <h1 className="text-center text-[clamp(2.2rem,11vw,7rem)] leading-none">
        <span className="typing-name" style={typingStyle}>
          <span className="typing-text">{name}</span>
        </span>
      </h1>
    </main>
  );
}
