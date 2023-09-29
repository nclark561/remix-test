import type { MetaFunction } from "@remix-run/node";
import { Link, Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Pokemon!!" },
    { name: "description", content: "random pokemon" },
  ];
};

export default function pokemon() {
  return (
    <Form>
      <h1>why wont u see me</h1>
      <label htmlFor="pokemon">choose pokemon</label>
      <input name="pokemon" list="pokemon" />
        <datalist id="pokemon">
          <option>pikachu</option>
          <option>chimchar</option>
        </datalist>
    </Form>
  );
}
