import { createFileRoute } from "@tanstack/react-router";
import Categoria from "../pages/Categoria";

export const Route = createFileRoute("/campos")({
  head: () => ({ meta: [
    { title: "Campos | Coronilha Negócios Rurais" },
    { name: "description", content: "Oportunidades demonstrativas de campos e propriedades rurais na região de Bagé/RS." },
    { property: "og:title", content: "Campos | Coronilha Negócios Rurais" },
  ] }),
  component: () => <Categoria categoria="Campos" />,
});
