import { createFileRoute } from "@tanstack/react-router";
import Categoria from "../pages/Categoria";

export const Route = createFileRoute("/gados")({
  head: () => ({ meta: [
    { title: "Gados | Coronilha Negócios Rurais" },
    { name: "description", content: "Oportunidades demonstrativas de gado na região de Bagé/RS." },
    { property: "og:title", content: "Gados | Coronilha Negócios Rurais" },
  ] }),
  component: () => <Categoria categoria="Gados" />,
});
