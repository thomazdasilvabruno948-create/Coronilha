import { createFileRoute } from "@tanstack/react-router";
import Contato from "../pages/Contato";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [
    { title: "Contato | Coronilha Negócios Rurais" },
    { name: "description", content: "Entre em contato com a Coronilha Negócios Rurais em Bagé/RS." },
  ] }),
  component: Contato,
});
