import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { createResource, For } from "solid-js";
import { api, getRatingClass, floorRating, toTime } from "~/lib/api";
import Poster from '~/lib/components/Poster';
import CastAndCrew from '~/lib/components/CastAndCrew';
import Recommendations from '~/lib/components/Recommendations';
import Genres from '~/lib/components/Genres';

export default function Movie() {
  const params = useParams();
  const [ film ] = createResource(() => params.id, async () => {
    const response = await api.getFilm(params.id);
    return [response];
  });
  return (
    <main>
      <Title>{film.title}</Title>
      <For each={film()}>{(film) => (
        <div class="film">
          <div class="film-head">
            <div class="film-head-top">
              <h1>{film.title}</h1>
              <div class="duration">{toTime(film.runtime)}</div>
              <Genres genres={film.genres} />
            </div>
            <div class="film-head-bottom">
              <div class={`rating ${getRatingClass(film.vote_average ?? 0)}`}>{floorRating(film.vote_average)}</div>
            </div>
          </div>
          <Poster path={film.poster_path} />
          <p class="plot">{film.overview}</p>
          <CastAndCrew id={film.id} />
          <Recommendations id={film.id} />
        </div>
      )}</For>
    </main>
  );
}

