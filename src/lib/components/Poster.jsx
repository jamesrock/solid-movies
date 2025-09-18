import { api } from "../api";

export default function Poster({path, size = 'original'}) {
  return (
    <div class="poster-crop">
      <img class="poster" src={api.getPosterPath(path, size)} alt="" />
    </div>
  );
}
