import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { createResource, For } from "solid-js";
import { api } from "~/lib/api";
import Poster from '~/lib/components/Poster';
import Filmography from '~/lib/components/Filmography';

export default function Person() {
  const params = useParams();
  const { id } = params;
  const [ person ] = createResource(async () => {
    const response = await api.getPerson(id);
    return [response];
  });
  return (
    <main>
      {/* <Title>{film.title}</Title> */}
      <For each={person()}>{(person) => (
        <div class="person">
          <h1>{person.name}</h1>
          <Poster path={person.profile_path} />
          <p class="bio">{person.biography}</p>
          <Filmography id={person.id} />
        </div>
      )}</For>
    </main>
  );
}

