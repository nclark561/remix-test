import type { MetaFunction } from "@remix-run/node";
import { Link, Form } from "@remix-run/react";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Pokemon!!" },
    { name: "description", content: "random pokemon" },
  ];
};


export default function pokemon() {
  const [pokemon, setPokemon] = useState<any>()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1292')
    .then(async(res) => {
      const resp = await res.json()
      console.log(resp)
      setPokemon(resp.results)
    })
    .catch(err => console.error(err))
  }, [])
  return (
    <Form>
      <h1>why wont u see me</h1>
      <label htmlFor="pokemon">choose pokemon</label>
      <input name="pokemon" list="pokemon" />
        <datalist id="pokemon">
          {pokemon?.map((p: any) => <option key={p.name}>{p.name}</option>)}
        </datalist>
    </Form>
  );
}
