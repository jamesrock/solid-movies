import { genres } from "~/lib/api";
import { useParams } from "@solidjs/router";
import FilmGrid from '~/lib/components/FilmGrid';

export default function Genre() {
  const params = useParams();
  const { id } = params;
  return (
    <main>
      <FilmGrid id={id} name={genres[id]} />
    </main>
  );
}
