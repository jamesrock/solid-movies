import { createResource, For } from "solid-js";
import { api, dedupe } from "../api";
import Films from '~/lib/components/Films';

export default function Filmopgraphy({ id }) {
  const [films] = createResource(async () => {
    const response = await api.getFilmography(id);
    return [response];
  });
  return (
    <For each={films()}>{(data) => (
      <div class="cast-and-crew">
        <Films films={dedupe(data.cast, 'cast')} name="Cast" credits="cast" />
        <Films films={dedupe(data.crew, 'crew')} name="Crew" credits="crew" />
      </div>  
    )}</For>
  );
}
