// import { createSignal } from "solid-js";
import { For } from "solid-js";

export default function Search() {
  // const [count, setCount] = createSignal(0);
  const items = [];
  return (
    <div class="search">
      <div class="search-body">
        <input type="search" placeholder="Search film, actor, director" />
        <div class="search-results">
          <For each={items}>{(item) => (
            <a href={`/${item.media_type}/${item.id}`} class="search-results-item">
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
