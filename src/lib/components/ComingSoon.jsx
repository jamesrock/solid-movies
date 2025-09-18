import { createResource } from "solid-js";
import { api } from "~/lib/api";
import Films from '~/lib/components/Films';

export default function ComingSoon() {
  const [films] = createResource(async () => {
    const response = await api.getComingSoon();
    return response.results;
  });
  return (
    <Films films={films()} name="Coming Soon" link="/coming" />
  );
}
