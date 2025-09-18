import { api, dedupeFilms, largest_size_map } from "../api";
import { createSignal, For, Show, onMount } from "solid-js";
import Poster from '~/lib/components/Poster';

export default function FilmGrid({
  id, 
  type = 'genre', 
  name = 'name', 
  sub = false
}) {
	let [films, setFilms] = createSignal([]);
	let [page, setPage] = createSignal(0);
	let [pages, setPages] = createSignal(0);
	const loadMore = (target) => {
    api.getFilms(type, target, id).then(data => {
      setFilms(dedupeFilms([...films(), ...data.results]));
      setPages(data.total_pages);
      setPage(target);
    }).catch(error => console.log('Error:', error));
  };
	onMount(() => {
		loadMore(1);
	});
  return (
    <div class="films">
      <div class="films-head">
        <h1>{name}</h1>
        <Show when={sub}><h2>{sub}</h2></Show>
      </div>
      <div class="films-body">
        <For each={films()}>{(film) => (
          <a href={`/movie/${film.id}`} class="category-item">
            <Poster path={film.poster_path} size={largest_size_map.movie} />
            <div class="desc">
              <div class="desc-name">{film.title}</div>
            </div>
          </a>  
        )}</For>
      </div>
      <Show when={page()<pages()}>
        <div class="films-foot">
          <button onClick={() => loadMore(page() + 1)}>Load more</button>
        </div>
      </Show>
    </div>
  );
}
