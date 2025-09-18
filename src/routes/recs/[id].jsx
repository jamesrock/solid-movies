import { useParams } from "@solidjs/router";
import { createResource, For } from "solid-js";
import { api } from "~/lib/api";
import FilmGrid from '~/lib/components/FilmGrid';

export default function Recs() {
  const params = useParams();
  const [ films ] = createResource(() => params.id, async () => {
    const response = await api.getFilm(params.id);
    return [response];
  });
  return (
    <main>
      <For each={films()}>{(film) => (
        <FilmGrid id={film.id} type="recs" name="Recommendations" sub={`based on ${film.title}`} />
      )}</For>      
    </main>
  );
}


