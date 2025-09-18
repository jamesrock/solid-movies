import { genres } from "~/lib/api";
import { useParams } from "@solidjs/router";

export default function FilmGrid() {
  const params = useParams();
  const { id } = params;
  return (
    <main>
      <FilmGrid id={id} name={genres[id]} />
    </main>
  );
}
