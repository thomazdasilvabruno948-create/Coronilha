import { useMemo, useState } from "react";

type Negocio = {
  id: number;
  titulo: string;
  categoria: string;
  localizacao: string;
  preco: string;
  peso: string;
  descricao: string;
  imagem: string;
};

const negocios: Negocio[] = [
  { id: 1, titulo: "Gado Hereford", categoria: "Gados", localizacao: "Bagé/RS", preco: "R$ 8.500 por animal", peso: "650 kg", descricao: "Exemplo fictício de reprodutor Hereford, com boa conformação, rusticidade e aptidão para produção de carne.", imagem: "https://images.unsplash.com/photo-1560114928-40f299870436?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, titulo: "Lote de terneiros Braford", categoria: "Gados", localizacao: "Dom Pedrito/RS", preco: "R$ 3.200 por animal", peso: "280 kg", descricao: "Exemplo fictício de lote de terneiros Braford, indicado para recria e terminação em sistema de campo.", imagem: "https://images.unsplash.com/photo-1545468259-4c7d8f7f3f3f?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, titulo: "Campo para criação de gado", categoria: "Campos", localizacao: "Aceguá/RS", preco: "R$ 18.000 por hectare", peso: "120 hectares", descricao: "Exemplo fictício de área rural com campos abertos, espaço para manejo e potencial para criação de gado.", imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, titulo: "Campo nativo com aguadas", categoria: "Campos", localizacao: "Lavras do Sul/RS", preco: "R$ 15.500 por hectare", peso: "85 hectares", descricao: "Exemplo fictício de campo nativo com aguadas e paisagem típica da Campanha Gaúcha, ideal para projetos rurais.", imagem: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80" },
];

export default function App() {
  const [categoria, setCategoria] = useState("Todos");
  const [pagina, setPagina] = useState<Negocio | null>(null);
  const filtrados = useMemo(() => categoria === "Todos" ? negocios : negocios.filter((item) => item.categoria === categoria), [categoria]);

  if (pagina) {
    return (
      <main>
        <header className="nav"><a className="marca" href="#inicio" onClick={() => setPagina(null)}>CORONILHA<span> NEGÓCIOS RURAIS</span></a><nav><a href="#catalogo" onClick={() => { setPagina(null); setCategoria("Campos"); }}>Campos</a><a href="#catalogo" onClick={() => { setPagina(null); setCategoria("Gados"); }}>Gado</a><a href="#sobre" onClick={() => setPagina(null)}>Sobre nós</a><a href="#contato" onClick={() => setPagina(null)}>Entre em contato</a></nav></header>
        <section className="section detail-page">
          <button className="back-link" onClick={() => setPagina(null)}>← Voltar ao catálogo</button>
          <div className="detail-layout">
            <img className="detail-image" src={pagina.imagem} alt={pagina.titulo} />
            <div className="detail-copy"><p className="eyebrow">{pagina.categoria}</p><h1>{pagina.titulo}</h1><p className="detail-location">{pagina.localizacao}</p><p>{pagina.descricao}</p><div className="detail-info"><div><small>Peso ou área</small><strong>{pagina.peso}</strong></div><div><small>Valor demonstrativo</small><strong>{pagina.preco}</strong></div></div><p className="notice">Este anúncio é fictício e serve apenas para demonstrar a apresentação de oportunidades rurais.</p><a className="button" href={`mailto:contato@coronilha.com.br?subject=Interesse%20em%20${encodeURIComponent(pagina.titulo)}`}>Tenho interesse ↗</a></div>
          </div>
        </section>
        <footer id="contato"><div className="marca">CORONILHA<span> NEGÓCIOS RURAIS</span></div><p>Vamos encontrar sua próxima oportunidade no campo?</p><a className="button" href="mailto:contato@coronilha.com.br">Entrar em contato</a><small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small></footer>
      </main>
    );
  }

  return (
    <main>
      <header className="nav"><a className="marca" href="#inicio">CORONILHA<span> NEGÓCIOS RURAIS</span></a><nav><a href="#catalogo" onClick={() => setCategoria("Campos")}>Campos</a><a href="#catalogo" onClick={() => setCategoria("Gados")}>Gado</a><a href="#sobre">Sobre nós</a><a href="#contato">Entre em contato</a></nav></header>
      <section id="inicio" className="hero hero-centered"><div className="hero-copy"><div className="hero-logo-placeholder" aria-label="Espaço reservado para a logo da empresa">LOGO</div><div className="hero-logo">CORONILHA</div><h1>Coronilha, negócios rurais</h1><p>Gados e campos selecionados para quem valoriza a vida rural, a qualidade e novas oportunidades.</p></div></section>
      <section className="categories"><article className="category-card"><img src="https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1200&q=85" alt="Gado pastando em uma propriedade rural" /><div className="category-card-body"><p className="eyebrow">NEGÓCIOS RURAIS</p><h2>Gados</h2><p>Conheça exemplos de animais disponíveis para negociação, com peso, preço demonstrativo e informações essenciais.</p><button onClick={() => setCategoria("Gados")}>Ver gados <span>↗</span></button></div></article><article className="category-card"><img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" alt="Campo aberto e paisagem rural" /><div className="category-card-body"><p className="eyebrow">PROPRIEDADES RURAIS</p><h2>Campos</h2><p>Explore exemplos de áreas rurais para criação, produção, investimento ou desenvolvimento de novos projetos.</p><button onClick={() => setCategoria("Campos")}>Ver campos <span>↗</span></button></div></article></section>
      <section id="catalogo" className="section"><div className="section-heading"><div><p className="eyebrow">NOSSO CATÁLOGO</p><h2>Encontre o negócio certo.</h2></div><div className="filters">{["Todos", "Gados", "Campos"].map((item) => <button className={categoria === item ? "active" : ""} key={item} onClick={() => setCategoria(item)}>{item}</button>)}</div></div><div className="grid">{filtrados.map((item) => <article className="property" key={item.id} onClick={() => setPagina(item)}><img src={item.imagem} alt={item.titulo} /><div className="property-body"><small>{item.categoria} · {item.localizacao}</small><h3>{item.titulo}</h3><p>{item.peso}</p><p>{item.descricao}</p><strong>{item.preco}</strong><button onClick={() => setPagina(item)}>Ver página ↗</button></div></article>)}</div></section>
      <section id="sobre" className="about"><p className="eyebrow">SOBRE A CORONILHA</p><h2>Mais que negócios.<br />Um novo começo.</h2><p>Somos uma empresa dedicada a aproximar pessoas de oportunidades no campo. Os itens apresentados nesta versão são exemplos fictícios para demonstrar a estrutura do catálogo.</p></section>
      <footer id="contato"><div className="marca">CORONILHA<span> NEGÓCIOS RURAIS</span></div><p>Vamos encontrar sua próxima oportunidade no campo?</p><a className="button" href="mailto:contato@coronilha.com.br">Entrar em contato</a><small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small></footer>
    </main>
  );
}
