import { useState } from "react";
import ImagemComReserva from "../components/ImagemComReserva";
import { negocios } from "../data/negocios";
import { perguntasFrequentes } from "../data/perguntasFrequentes";

type HomeProps = { navegar: (path: string) => void };

export default function Home({ navegar }: HomeProps) {
  const [faqAberta, setFaqAberta] = useState<number | null>(null);

  return (
    <>
      <section className="hero section">
        <div>
          <p className="eyebrow">CAMPANHA GAÚCHA · BAGÉ/RS</p>
          <h1>Negócios rurais com mais clareza.</h1>
          <p>Uma experiência para descobrir gados, campos e oportunidades no universo rural.</p>
          <div className="hero-actions">
            <a className="button" href="/campos" onClick={(e) => { e.preventDefault(); navegar("/campos"); }}>Explorar campos ↗</a>
            <a className="button button-secondary" href="/gados" onClick={(e) => { e.preventDefault(); navegar("/gados"); }}>Ver gados ↗</a>
          </div>
        </div>
      </section>

      <section className="section categories">
        <a className="category-card" href="/gados" onClick={(e) => { e.preventDefault(); navegar("/gados"); }}>
          <ImagemComReserva src="https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1200&q=85" alt="Gado em propriedade rural" />
          <div className="category-card-body">
            <p className="eyebrow">NEGÓCIOS RURAIS</p><h2>Gados</h2>
            <p>Veja os anúncios demonstrativos de gado.</p><span className="button">Ver gados ↗</span>
          </div>
        </a>
        <a className="category-card" href="/campos" onClick={(e) => { e.preventDefault(); navegar("/campos"); }}>
          <ImagemComReserva src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85" alt="Campo aberto" />
          <div className="category-card-body">
            <p className="eyebrow">PROPRIEDADES RURAIS</p><h2>Campos</h2>
            <p>Explore os anúncios demonstrativos de campos.</p><span className="button">Ver campos ↗</span>
          </div>
        </a>
      </section>

      <section id="catalogo" className="section">
        <p className="eyebrow">CATÁLOGO</p><h2>Oportunidades em destaque</h2>
        <div className="catalog-grid">
          {negocios.map((n) => (
            <article className="listing-card" key={n.id} onClick={() => navegar(`/${n.categoria.toLowerCase()}/${n.slug}`)}>
              <ImagemComReserva src={n.imagem} alt={n.titulo} />
              <div className="listing-card-body"><p className="eyebrow">{n.categoria} · {n.localizacao}</p><h3>{n.titulo}</h3><strong>{n.preco}</strong><span>Ver detalhes ↗</span></div>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre" className="section faq-section">
        <p className="eyebrow">DÚVIDAS</p><h2>Perguntas frequentes</h2>
        {perguntasFrequentes.map(([pergunta, resposta], index) => (
          <div className="faq-item" key={pergunta}>
            <button onClick={() => setFaqAberta(faqAberta === index ? null : index)} aria-expanded={faqAberta === index}>
              <span>{pergunta}</span><span>{faqAberta === index ? "−" : "+"}</span>
            </button>
            {faqAberta === index && <p>{resposta}</p>}
          </div>
        ))}
      </section>
    </>
  );
}