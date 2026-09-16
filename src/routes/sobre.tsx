import { createFileRoute } from "@tanstack/react-router";
import Sobre from "../pages/Sobre";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [
    { title: "Sobre nós | Coronilha Negócios Rurais" },
    { name: "description", content: "Conheça a Coronilha Negócios Rurais e nossa proposta para oportunidades no campo." },
  ] }),
  component: Sobre,
});
