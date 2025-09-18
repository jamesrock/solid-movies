import { createSignal, For } from "solid-js";
import { api, addProp, sortByProp, filterByMatch, media_type_name, media_type_profile_path, largest_size_map } from "../api";
import Poster from './Poster';
const cache = {};

export default function Search() {
  const [items, setItems] = createSignal([]);
  const [query, setQuery] = createSignal('');
  const runSearch = (q) => {
    setQuery(q);
    if(q.length === 0) {
      clearSearch();
      return;
    };
    if(cache[q]) {
      setItems(cache[q]);
      return;
    };
    api.search(q).then(data => {
      cache[q] = sortByProp(filterByMatch([...addProp(data[0].results, 'media_type', 'movie'), ...addProp(data[1].results, 'media_type', 'person')], q), 'popularity');
      setItems(cache[q]);
    }).catch(error => console.log('Error:', error));
  };
  const clearSearch = () => {
    setQuery('');
    setItems([]);
  };
  return (
    <div class="search">
      <div class="search-body">
        <input type="search" placeholder="Search film, actor, director" value={query()} onInput={(e) => runSearch(e.target.value)} />
        <div class="search-results">
          <For each={items()}>{(item) => (
            <a href={`/${item.media_type}/${item.id}`} class="search-results-item" onClick={clearSearch}>
              <div class="poster-wrap">
                <Poster path={item[media_type_profile_path[item.media_type]]} size={largest_size_map[item.media_type]} />
              </div>
              <div>{item[media_type_name[item.media_type]]}</div>
            </a>
          )}</For>
        </div>
      </div>
    </div>
  );
}
