import Search from '~/lib/components/Search';
import Navigation from '~/lib/components/Navigation';

export default function Counter() {
  return (
    <header>
      <div class="header-inner container">
        <Search />
        <Navigation />
      </div>
    </header>
  );
}
