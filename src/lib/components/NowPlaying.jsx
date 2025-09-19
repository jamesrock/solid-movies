import { createResource } from "solid-js";
import { api } from "~/lib/api";
import { Films } from ".";

export default function NowPlaying() {
  const [films] = createResource(async () => {
    const response = await api.getNowPlaying();
    return response.results;
  });
  return (
    <Films films={films()} name="Now Playing" link="/playing" />
  );
}
