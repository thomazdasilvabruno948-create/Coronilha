import { Link } from "@tanstack/react-router";
import { useState } from "react";
import ImagemComReserva from "../components/ImagemComReserva";
import { negocios } from "../data/negocios";
import { perguntasFrequentes } from "../data/perguntasFrequentes";
import "../home-identity.css";
import "../home-background-fix.css";

export default function Home() {
  const [faqAberta, setFaqAberta] = useState<number | null>(null);

  return (
    <div className="home-page">
      <section className="hero section">
        <div className="hero-centered">
          <div className="hero-copy">
            <div className="hero-logo-placeholder" aria-label="Espaço reservado para a logo">
              LOGO
            </div>
            <div className="hero-logo">CORONILHA</div>
          </div>
        </div>
      </section>

      <section className="section categories">
        <Link className="category-card" to="/gados">
          <ImagemComReserva src="https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1200&q=85" alt="Gado em propriedade rural" />
          <div className="category-card-body">
            <p className="eyebrow">NEGÓCIOS RURAIS</p>
            <h2>GADOS EM GERAL</h2>
            <p>Animais selecionados para diferentes necessidades de produção, criação e comercialização, conectando compradores a oportunidades no campo.</p>
            <span className="button">Ver gados ↗</span>
          </div>
        </Link>
        <Link className="category-card" to="/campos">
          <ImagemComReserva src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85" alt="Campo aberto" />
          <div className="category-card-body">
            <p className="eyebrow">PROPRIEDADES RURAIS</p>
            <h2>CAMPOS</h2>
            <p>Propriedades rurais para criação, produção e novos projetos, reunindo áreas com diferentes características e possibilidades de uso.</p>
            <span className="button">Ver campos ↗</span>
          </div>
        </Link>
      </section>

      <section id="catalogo" className="section">
        <p className="eyebrow">CATÁLOGO</p><h2>Oportunidades em destaque</h2>
        <div className="catalog-grid">
          {negocios.map((n) => (
            <Link className="listing-card" key={n.id} to={`/${n.categoria.toLowerCase()}/${n.slug}`}>
              <ImagemComReserva src={n.imagem} alt={n.titulo} />
              <div className="listing-card-body"><p className="eyebrow">{n.categoria} · {n.localizacao}</p><h3>{n.titulo}</h3><strong>{n.preco}</strong><span>Ver detalhes ↗</span></div>
            </Link>
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
    </div>
  );
}
