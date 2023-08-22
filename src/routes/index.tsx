import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import type { ICharactersResponse } from "~/types/characters";

export const useCharacters = routeLoader$<ICharactersResponse>(async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  return response.json();
});

export default component$(() => {
  const characters = useCharacters();

  return (
    <>
      <h1>Персонажи рик и морти на qwik 👋</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridGap: "20px",
        }}
      >
        {characters.value.results.map((character) => (
          <div
            key={character.id}
            style={{
              border: "2px solid gray",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 20px 0",
            }}
          >
            <img
              src={character.image}
              alt={character.name}
              width={120}
              height={120}
            />
            <h2>{character.name}</h2>
            <Link href={`/character/${character.id}`}>К персонажу</Link>
          </div>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
