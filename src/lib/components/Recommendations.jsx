import { createResource } from "solid-js";
import { api, genres } from "~/lib/api";
import Films from '~/lib/components/Films';

export default function Recommendations({ id }) {
  const [films] = createResource(async () => {
    const response = await api.getRecommendations(id);
    return response.results;
  });
  return (
    <Films films={films} name="Recommendations" link={`/recs/${id}`} />
  );
}
