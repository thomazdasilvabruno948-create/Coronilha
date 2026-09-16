import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coronilha | Negócios Rurais" },
      { name: "description", content: "Negócios rurais, gados e campos na região de Bagé/RS." },
      { property: "og:title", content: "Coronilha | Negócios Rurais" },
      { property: "og:description", content: "Gados, campos e oportunidades no universo rural." },
    ],
  }),
  component: Home,
});
