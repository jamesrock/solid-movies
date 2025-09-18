import { For, Show } from "solid-js";
import { getRole, largest_size_map } from "~/lib/api";
import Poster from '~/lib/components/Poster';

export default function Films(props) {
  const { name, link, credits } = props;
  const films = () => props.films;
  return (
    <div class="category">
      <div class="category-head">
        <h2>{name}</h2>
        <Show when={link}><a href={link}>view all</a></Show>
      </div>
      <div class="category-items">
      <For each={films()}>{(film) => (
        <a href={`/movie/${film.id}`} class="category-item">
          <Poster path={film.poster_path} size={largest_size_map.movie} />
          <div class="desc">
            <div class="desc-name">{film.title}</div>
            <Show when={credits}><div class="desc-role">{getRole(credits, film)}</div></Show>
          </div>
        </a>
      )}</For>
      </div>
    </div>
  );
}
