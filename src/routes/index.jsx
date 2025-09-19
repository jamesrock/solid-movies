import { NowPlaying, ComingSoon, Category } from "~/lib/components";

export default function Home() {
  return (
    <main>
      <div class="categories">
        <NowPlaying />
        <ComingSoon />
        <Category id="35" />
        <Category id="28" />
        <Category id="10751" />
        <Category id="18" />
        <Category id="27" />
        <Category id="878" />
        <div class="categories-foot">
          <a href="/genre" class="button">View all genres</a>
        </div>
      </div>
    </main>
  );
}
