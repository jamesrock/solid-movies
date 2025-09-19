import Search from '~/lib/components/Search';
import Navigation from '~/lib/components/Navigation';

export default function Header() {
  return (
    <header>
      <div class="header-inner container">
        <Search />
        <Navigation />
      </div>
    </header>
  );
}
