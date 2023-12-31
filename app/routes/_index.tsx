import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix test" },
    { name: "description", content: "Customize here" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix test</h1>
      <Link to="/random" prefetch="intent" preventScrollReset>
        Click me
      </Link>
    </div>
  );
}
