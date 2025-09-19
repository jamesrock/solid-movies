import { useParams } from "@solidjs/router";
import { createResource, For } from "solid-js";
import { api } from "~/lib/api";
import { Poster, Filmography } from "~/lib/components";

export default function Person() {
  const params = useParams();
  const [ person ] = createResource(() => params.id, async () => {
    const response = await api.getPerson(params.id);
    return [response];
  });
  return (
    <main>
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

