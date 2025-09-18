import People from '~/lib/components/People';
import { createResource, For } from "solid-js";
import { api, dedupe, sortByPriority } from '../api';

export default function CastAndCrew({ id }) {
  const [ people ] = createResource(async () => {
    const response = await api.getCredits(id);
    return [response];
  });
  return (
    <For each={people()}>{(data) => (
      <div class="cast-and-crew">
        <People people={dedupe(data.cast, 'cast')} name="Cast" type="cast" />
        <People people={dedupe(sortByPriority(data.crew, 'job'), 'crew')} name="Crew" type="crew" />
      </div>
    )}</For>    
  );
}


