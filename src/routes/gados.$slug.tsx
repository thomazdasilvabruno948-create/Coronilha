import { createFileRoute, notFound } from "@tanstack/react-router";
import DetalheNegocio from "../pages/DetalheNegocio";
import { negocios } from "../data/negocios";

export const Route = createFileRoute("/gados/$slug")({
  loader: ({ params }) => {
    const item = negocios.find((n) => n.categoria === "Gados" && n.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.titulo ?? "Gado"} | Coronilha Negócios Rurais` },
    { name: "description", content: loaderData?.descricao ?? "Oportunidade de gado na região de Bagé/RS." },
  ] }),
  component: () => <DetalheNegocio item={Route.useLoaderData()} />,
});
