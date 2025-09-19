import { For } from "solid-js";
import { getRole, largest_size_map } from "../api";
import Poster from '~/lib/components/Poster';

export default function People({ people, name, type }) {
  return (
    <div class="category">
      <div class="category-head">
        <h2>{name}</h2>
      </div>
      <div class="category-items">
      <For each={people}>{(person) => (
        <a href={`/person/${person.id}`} class="category-item">
          <Poster path={person.profile_path} size={largest_size_map.person} />
          <div class="desc">
            <div class="desc-name">{person.name}</div>
            <div class="desc-role">{getRole(type, person)}</div>
          </div>
        </a>
      )}</For>
      </div>
    </div>
  );
}
