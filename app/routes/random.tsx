import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Random" },
    { name: "description", content: "this is a random page" },
  ];
};

export default function Random() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Random Page</h1>
      <Link to=".." prefetch="intent" preventScrollReset>
        Click me
      </Link>
    </div>
  );
}
