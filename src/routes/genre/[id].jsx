import { useParams } from "@solidjs/router";
import { genres } from "~/lib/api";
import { FilmGrid } from "~/lib/components";

export default function Genre() {
  const params = useParams();
  const { id } = params;
  return (
    <main>
      <FilmGrid id={id} name={genres[id]} />
    </main>
  );
}
