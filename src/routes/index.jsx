import { Title } from "@solidjs/meta";
import NowPlaying from '~/lib/components/NowPlaying';
import ComingSoon from '~/lib/components/ComingSoon';
import Category from '~/lib/components/Category';

export default function Home() {
  return (
    <main>
      <Title>Movies</Title> 
      <div class="categories">
        <NowPlaying />
        <ComingSoon />
        <Category id="35" />
        <Category id="28" />
        <Category id="10751" />
        <Category id="18" />
        <Category id="27" />
        <Category id="878" />
      </div>
    </main>
  );
}
