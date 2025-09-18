import { createResource } from "solid-js";
import { api, genres } from "~/lib/api";
import Films from '~/lib/components/Films';

export default function Category({ id }) {
  const [films] = createResource(async () => {
    const response = await api.getCategory(id);
    return response.results;
  });
  return (
    <Films films={films} name={genres[id]} link={`/genre/${id}`} />
  );
}
