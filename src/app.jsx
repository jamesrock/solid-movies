import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from '~/lib/components/Header';
import "./globals.scss";

export default function App() {
  return (
    <>
      <Header />
      <Router
        root={props => (
          <MetaProvider>
            <Title>Movies</Title>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </>
  );
}
