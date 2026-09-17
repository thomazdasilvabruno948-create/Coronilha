import { Outlet, Link, HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import stylesUrl from "../styles.css?url";
import contactStylesUrl from "../contact-layout.css?url";
import fieldsStylesUrl from "../fields-layout.css?url";
import detailStylesUrl from "../detail-layout.css?url";
import refactorStylesUrl from "../coronilha-refactor.css?url";
import begeBackgroundUrl from "../bege-background.css?url";
import cardOverridesUrl from "../card-style-overrides.css?url";
import themeOverridesUrl from "../theme-overrides.css?url";
import homeBackgroundFixUrl from "../home-background-fix.css?url";
import homeIdentityUrl from "../home-identity.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Coronilha Negócios Rurais" },
      { name: "theme-color", content: "#1f3d2b" },
    ],
    links: [
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "stylesheet", href: stylesUrl },
      { rel: "stylesheet", href: contactStylesUrl },
      { rel: "stylesheet", href: fieldsStylesUrl },
      { rel: "stylesheet", href: detailStylesUrl },
      { rel: "stylesheet", href: refactorStylesUrl },
      { rel: "stylesheet", href: begeBackgroundUrl },
      { rel: "stylesheet", href: cardOverridesUrl },
      { rel: "stylesheet", href: themeOverridesUrl },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, []);
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

function NotFound() {
  return (
    <section className="section detail-page">
      <p className="eyebrow">404</p>
      <h1>Página não encontrada.</h1>
      <p>A página que você procura não existe ou foi movida.</p>
      <Link className="button" to="/">Voltar para o início ↗</Link>
    </section>
  );
}
