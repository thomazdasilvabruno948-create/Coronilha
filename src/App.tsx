import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { negocios } from "./data/negocios";
import type { CategoriaNegocio } from "./data/negocios";
import Categoria from "./pages/Categoria";
import Contato from "./pages/Contato";
import DetalheNegocio from "./pages/DetalheNegocio";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function caminhoAtual() {
  return window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
}

export default function App() {
  const [rota, setRota] = useState(caminhoAtual());

  useEffect(() => {
    const sincronizar = () => {
      setRota(caminhoAtual());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", sincronizar);
    sincronizar();
    return () => window.removeEventListener("popstate", sincronizar);
  }, []);

  const navegar = (path: string) => {
    const destino = path.replace(/^\/+|\/+$/g, "").toLowerCase();
    if (destino === caminhoAtual()) return;
    window.history.pushState({}, "", path);
    setRota(destino);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const item = useMemo(
    () => negocios.find((n) => rota === `${n.categoria.toLowerCase()}/${n.slug}`),
    [rota],
  );

  useEffect(() => {
    const titulo = item
      ? `${item.titulo} | Coronilha Negócios Rurais`
      : rota === "sobre"
        ? "Sobre nós | Coronilha Negócios Rurais"
        : rota === "contato"
          ? "Contato | Coronilha Negócios Rurais"
          : rota === "gados"
            ? "Gados | Coronilha Negócios Rurais"
            : rota === "campos"
              ? "Campos | Coronilha Negócios Rurais"
              : "Coronilha | Negócios Rurais";
    document.title = titulo;
  }, [item, rota]);

  let pagina: React.ReactNode;

  if (item) {
    pagina = <DetalheNegocio item={item} navegar={navegar} />;
  } else if (rota === "gados" || rota === "campos") {
    pagina = <Categoria categoria={rota === "gados" ? "Gados" : "Campos" as CategoriaNegocio} navegar={navegar} />;
  } else if (rota === "sobre") {
    pagina = <Sobre />;
  } else if (rota === "contato") {
    pagina = <Contato />;
  } else {
    pagina = <Home navegar={navegar} />;
  }

  return (
    <main>
      <Header navegar={navegar} />
      {pagina}
      <Footer navegar={navegar} />
    </main>
  );
}
