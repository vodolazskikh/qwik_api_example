import { component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  Link,
} from "@builder.io/qwik-city";
import type { ICharacter } from "~/types/characters";

export const useCharacter = routeLoader$<ICharacter>(async (requestEvent) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${requestEvent.params.id}`
  );
  return response.json();
});

export default component$(() => {
  const character = useCharacter();

  return (
    <>
      <div>
        <img
          src={character.value.image}
          alt={character.value.name}
          width={120}
          height={120}
        />
        <h2>{character.value.name}</h2>
      </div>
      <Link href="/">Ко всем персонажам</Link>
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
