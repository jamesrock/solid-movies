import { For } from "solid-js";

export default function Genres({ genres = [] }) {
  return (
    <div class="genres">
      <For each={genres}>{(genre) => (
        <a href={`/genre/${genre.id}`}>{genre.name}</a>
      )}</For>
    </div>
  );
}
