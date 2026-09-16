import ImagemComReserva from "../components/ImagemComReserva";
import type { CategoriaNegocio } from "../data/negocios";
import { negocios } from "../data/negocios";

type Props = { categoria: CategoriaNegocio; navegar: (path: string) => void };

export default function Categoria({ categoria, navegar }: Props) {
  const itens = negocios.filter((n) => n.categoria === categoria);

  return (
    <section className="section category-page">
      <p className="eyebrow">NEGÓCIOS RURAIS</p>
      <h1>{categoria}</h1>
      <p className="category-intro">Explore as oportunidades demonstrativas de {categoria.toLowerCase()} da Coronilha.</p>
      <div className="catalog-grid">
        {itens.map((n) => (
          <article className="listing-card" key={n.id} onClick={() => navegar(`/${n.categoria.toLowerCase()}/${n.slug}`)}>
            <ImagemComReserva src={n.imagem} alt={n.titulo} />
            <div className="listing-card-body">
              <p className="eyebrow">{n.localizacao}</p><h2>{n.titulo}</h2><p>{n.descricao}</p><strong>{n.preco}</strong><span>Ver oportunidade ↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}