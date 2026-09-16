import { useEffect, useMemo, useState } from "react";

type Negocio = {
  id: number;
  slug: string;
  titulo: string;
  categoria: "Gados" | "Campos";
  localizacao: string;
  preco: string;
  medida: string;
  descricao: string;
  imagem: string;
  imagens: string[];
};

const imagemReserva = "/fallback-rural.svg";

const negocios: Negocio[] = [
  {
    id: 1,
    slug: "gado-hereford",
    titulo: "Gado Hereford",
    categoria: "Gados",
    localizacao: "Bagé/RS",
    preco: "R$ 8.500 por animal",
    medida: "650 kg",
    descricao: "Exemplo demonstrativo de reprodutor Hereford, com boa conformação, rusticidade e aptidão para produção de carne.",
    imagem: "https://images.unsplash.com/photo-1560114928-40f299870436?auto=format&fit=crop&w=1400&q=85",
    imagens: [
      "https://images.unsplash.com/photo-1560114928-40f299870436?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&w=1400&q=85",
    ],
  },
  {
    id: 2,
    slug: "lote-de-terneiros-braford",
    titulo: "Lote de terneiros Braford",
    categoria: "Gados",
    localizacao: "Dom Pedrito/RS",
    preco: "R$ 3.200 por animal",
    medida: "280 kg",
    descricao: "Exemplo demonstrativo de lote de terneiros Braford, indicado para recria e terminação em sistema de campo.",
    imagem: "https://images.unsplash.com/photo-1545468259-4c7d8f7f3f3f?auto=format&fit=crop&w=1400&q=85",
    imagens: [
      "https://images.unsplash.com/photo-1545468259-4c7d8f7f3f3f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1400&q=85",
    ],
  },
  {
    id: 3,
    slug: "campo-para-criacao-de-gado",
    titulo: "Campo para criação de gado",
    categoria: "Campos",
    localizacao: "Aceguá/RS",
    preco: "R$ 18.000 por hectare",
    medida: "120 hectares",
    descricao: "Exemplo demonstrativo de área rural com campos abertos, espaço para manejo e potencial para criação de gado.",
    imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    imagens: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1400&q=85",
    ],
  },
  {
    id: 4,
    slug: "campo-nativo-com-aguadas",
    titulo: "Campo nativo com aguadas",
    categoria: "Campos",
    localizacao: "Lavras do Sul/RS",
    preco: "R$ 15.500 por hectare",
    medida: "85 hectares",
    descricao: "Exemplo demonstrativo de campo nativo com aguadas e paisagem típica da Campanha Gaúcha, ideal para projetos rurais.",
    imagem: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85",
    imagens: [
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1400&q=85",
    ],
  },
];

const perguntasFrequentes = [
  ["Os anúncios do catálogo são reais?", "Nesta versão demonstrativa, os anúncios são fictícios e servem para apresentar a estrutura da Coronilha."],
  ["Como posso demonstrar interesse em um anúncio?", "Abra o anúncio e use o botão de contato para iniciar uma conversa sobre a oportunidade."],
  ["A Coronilha trabalha com gados e campos?", "Sim. A proposta é aproximar pessoas de oportunidades relacionadas a gados e propriedades rurais."],
  ["Posso entrar em contato para tirar dúvidas?", "Sim. A página de contato reúne os canais disponíveis para atendimento."],
];

function ImagemComReserva({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img className={className} src={src} alt={alt} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = imagemReserva; }} />;
}

function caminhoAtual() {
  return window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
}

export default function App() {
  const [rota, setRota] = useState(caminhoAtual());
  const [fotoSelecionada, setFotoSelecionada] = useState(0);
  const [faqAberta, setFaqAberta] = useState<number | null>(null);

  useEffect(() => {
    const sincronizar = () => {
      setRota(caminhoAtual());
      setFotoSelecionada(0);
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("popstate", sincronizar);
    sincronizar();
    return () => window.removeEventListener("popstate", sincronizar);
  }, []);

  const navegar = (path: string) => {
    const destino = path.replace(/^\/+|\/+$/g, "").toLowerCase();
    const atual = caminhoAtual();
    if (destino === atual) return;
    window.history.pushState({}, "", path);
    setRota(destino);
    setFotoSelecionada(0);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const item = useMemo(() => negocios.find((n) => rota === `${n.categoria.toLowerCase()}/${n.slug}`), [rota]);
  const categoria = rota === "gados" ? "Gados" : rota === "campos" ? "Campos" : null;
  const itensCategoria = categoria ? negocios.filter((n) => n.categoria === categoria) : negocios;

  useEffect(() => {
    const titulo = item ? `${item.titulo} | Coronilha Negócios Rurais` : rota === "sobre" ? "Sobre nós | Coronilha Negócios Rurais" : rota === "contato" ? "Contato | Coronilha Negócios Rurais" : rota === "gados" ? "Gados | Coronilha Negócios Rurais" : rota === "campos" ? "Campos | Coronilha Negócios Rurais" : "Coronilha | Negócios Rurais";
    document.title = titulo;
  }, [item, rota]);

  const cabecalho = (
    <header className="nav">
      <a className="marca" href="/" onClick={(e) => { e.preventDefault(); navegar("/"); }}>
        CORONILHA<span> NEGÓCIOS RURAIS</span>
      </a>
      <nav>
        <a href="/campos" onClick={(e) => { e.preventDefault(); navegar("/campos"); }}>Campos</a>
        <a href="/gados" onClick={(e) => { e.preventDefault(); navegar("/gados"); }}>Gado</a>
        <a href="/sobre" onClick={(e) => { e.preventDefault(); navegar("/sobre"); }}>Sobre nós</a>
        <a href="/contato" onClick={(e) => { e.preventDefault(); navegar("/contato"); }}>Entre em contato</a>
      </nav>
    </header>
  );

  const rodape = (
    <footer>
      <div className="marca">CORONILHA<span> NEGÓCIOS RURAIS</span></div>
      <p>Vamos encontrar sua próxima oportunidade no campo?</p>
      <button className="button" onClick={() => navegar("/contato")}>Entrar em contato ↗</button>
      <small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small>
    </footer>
  );

  if (item) {
    return <main>{cabecalho}<section className="section detail-page">
      <button className="back-link" onClick={() => navegar(`/${item.categoria.toLowerCase()}`)}>← Voltar para {item.categoria.toLowerCase()}</button>
      <div className="detail-layout">
        <div className="detail-gallery">
          <ImagemComReserva className="detail-image" src={item.imagens[fotoSelecionada] || item.imagem} alt={`${item.titulo} - foto ${fotoSelecionada + 1}`} />
          <div className="detail-thumbnails" aria-label="Fotos do anúncio">
            {item.imagens.map((foto, index) => <button className={`detail-thumbnail ${fotoSelecionada === index ? "selected" : ""}`} key={`${item.id}-${index}`} onClick={() => setFotoSelecionada(index)} aria-label={`Ver foto ${index + 1}`}><ImagemComReserva src={foto} alt={`Miniatura ${index + 1} de ${item.titulo}`} /></button>)}
          </div>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{item.categoria}</p>
          <h1>{item.titulo}</h1>
          <p className="detail-location">{item.localizacao}</p>
          <p>{item.descricao}</p>
          <div className="detail-info"><div><small>Peso ou área</small><strong>{item.medida}</strong></div><div><small>Valor demonstrativo</small><strong>{item.preco}</strong></div></div>
          <p className="notice">Este anúncio é fictício e serve apenas para demonstrar a apresentação de oportunidades rurais.</p>
          <a className="button" href={`mailto:contato@coronilha.com.br?subject=${encodeURIComponent(`Interesse em ${item.titulo}`)}`}>Tenho interesse ↗</a>
        </div>
      </div>
      {item.categoria === "Campos" && <div className="detail-map"><div className="detail-map-heading"><p className="eyebrow">LOCALIZAÇÃO</p><h2>Veja a região do campo.</h2><p>Mapa demonstrativo da região informada no anúncio.</p></div><div className="detail-map-grid"><div className="detail-map-panel"><iframe title={`Mapa de ${item.titulo}`} src={`https://www.google.com/maps?q=${encodeURIComponent(`${item.localizacao}, Brasil`)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="detail-terrain-panel"><ImagemComReserva src={item.imagens[1] || item.imagem} alt={`Imagem ilustrativa de ${item.localizacao}`} /></div></div><a className="button" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${item.localizacao}, Brasil`)}`} target="_blank" rel="noreferrer">Como chegar ↗</a></div>}
    </section>{rodape}</main>;
  }

  if (rota === "sobre") return <main>{cabecalho}<section className="section about detail-page"><p className="eyebrow">SOBRE A CORONILHA</p><h1>Mais que negócios.<br />Um novo começo.</h1><p>Somos uma empresa dedicada a aproximar pessoas de oportunidades no campo. Nesta versão demonstrativa, o catálogo apresenta exemplos fictícios para validar a experiência do site.</p><div className="owner-profile"><div className="owner-photo-placeholder" role="img" aria-label="Espaço reservado para foto">FOTO</div><h2>Coronilha Negócios Rurais</h2><p className="owner-description">Uma proposta voltada ao mercado rural da Campanha Gaúcha, conectando pessoas, gado, campos e novas oportunidades.</p></div></section>{rodape}</main>;

  if (rota === "contato") return <main>{cabecalho}<section id="contato-page" className="section detail-page"><p className="eyebrow">CONTATO</p><h1>Vamos conversar.</h1><p>Entre em contato para tirar dúvidas, apresentar uma oportunidade ou saber mais sobre a Coronilha.</p><div className="contact-grid"><a className="contact-card" href="mailto:contato@coronilha.com.br"><strong>E-mail</strong><span>contato@coronilha.com.br ↗</span></a><a className="contact-card" href="https://wa.me/5553999999999" target="_blank" rel="noreferrer"><strong>WhatsApp</strong><span>Falar pelo WhatsApp ↗</span></a><a className="contact-card" href="https://www.google.com/maps/?q=Bage,RS" target="_blank" rel="noreferrer"><strong>Localização</strong><span>Bagé, Rio Grande do Sul ↗</span></a></div></section>{rodape}</main>;

  if (categoria) return <main>{cabecalho}<section className="section category-page"><p className="eyebrow">NEGÓCIOS RURAIS</p><h1>{categoria}</h1><p className="category-intro">Explore as oportunidades demonstrativas de {categoria.toLowerCase()} da Coronilha.</p><div className="catalog-grid">{itensCategoria.map((n) => <article className="listing-card" key={n.id} onClick={() => navegar(`/${n.categoria.toLowerCase()}/${n.slug}`)}><ImagemComReserva src={n.imagem} alt={n.titulo} /><div className="listing-card-body"><p className="eyebrow">{n.localizacao}</p><h2>{n.titulo}</h2><p>{n.descricao}</p><strong>{n.preco}</strong><span>Ver oportunidade ↗</span></div></article>)}</div></section>{rodape}</main>;

  return <main>{cabecalho}<section className="hero section"><div><p className="eyebrow">CAMPANHA GAÚCHA · BAGÉ/RS</p><h1>Negócios rurais com mais clareza.</h1><p>Uma experiência para descobrir gados, campos e oportunidades no universo rural.</p><div className="hero-actions"><a className="button" href="/campos" onClick={(e) => { e.preventDefault(); navegar("/campos"); }}>Explorar campos ↗</a><a className="button button-secondary" href="/gados" onClick={(e) => { e.preventDefault(); navegar("/gados"); }}>Ver gados ↗</a></div></div></section><section className="section categories"><a className="category-card" href="/gados" onClick={(e) => { e.preventDefault(); navegar("/gados"); }}><ImagemComReserva src="https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1200&q=85" alt="Gado em propriedade rural" /><div className="category-card-body"><p className="eyebrow">NEGÓCIOS RURAIS</p><h2>Gados</h2><p>Veja os anúncios demonstrativos de gado.</p><span className="button">Ver gados ↗</span></div></a><a className="category-card" href="/campos" onClick={(e) => { e.preventDefault(); navegar("/campos"); }}><ImagemComReserva src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85" alt="Campo aberto" /><div className="category-card-body"><p className="eyebrow">PROPRIEDADES RURAIS</p><h2>Campos</h2><p>Explore os anúncios demonstrativos de campos.</p><span className="button">Ver campos ↗</span></div></a></section><section id="catalogo" className="section"><p className="eyebrow">CATÁLOGO</p><h2>Oportunidades em destaque</h2><div className="catalog-grid">{negocios.map((n) => <article className="listing-card" key={n.id} onClick={() => navegar(`/${n.categoria.toLowerCase()}/${n.slug}`)}><ImagemComReserva src={n.imagem} alt={n.titulo} /><div className="listing-card-body"><p className="eyebrow">{n.categoria} · {n.localizacao}</p><h3>{n.titulo}</h3><strong>{n.preco}</strong><span>Ver detalhes ↗</span></div></article>)}</div></section><section id="sobre" className="section faq-section"><p className="eyebrow">DÚVIDAS</p><h2>Perguntas frequentes</h2>{perguntasFrequentes.map(([pergunta, resposta], index) => <div className="faq-item" key={pergunta}><button onClick={() => setFaqAberta(faqAberta === index ? null : index)} aria-expanded={faqAberta === index}><span>{pergunta}</span><span>{faqAberta === index ? "−" : "+"}</span></button>{faqAberta === index && <p>{resposta}</p>}</div>)}</section>{rodape}</main>;
}
