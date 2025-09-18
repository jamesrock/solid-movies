import { api } from "~/lib/api";
import { createResource, For } from "solid-js";

export default function Genres() {
  const [ genres ] = createResource(async () => {
    const response = await api.getGenres();
    return response.genres;
  });
  return (
    <main>
      <div className="all-genres">
        <For each={genres()}>{(genre) => (
          <div><a href={`/genre/${genre.id}`}>{genre.name}</a></div>
        )}</For>
        </div>
    </main>
  );
}
