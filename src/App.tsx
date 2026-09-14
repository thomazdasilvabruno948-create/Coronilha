import { useMemo, useState } from "react";

type Imovel = {
  id: number;
  titulo: string;
  categoria: string;
  localizacao: string;
  preco: string;
  quartos: number;
  area: string;
  imagem: string;
};

const imoveis: Imovel[] = [
  { id: 1, titulo: "Casa contemporânea no centro", categoria: "Imóveis", localizacao: "Centro, Bagé/RS", preco: "R$ 480.000", quartos: 3, area: "180 m²", imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, titulo: "Residência com amplo pátio", categoria: "Imóveis", localizacao: "São Judas, Bagé/RS", preco: "R$ 365.000", quartos: 2, area: "145 m²", imagem: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, titulo: "Terreno pronto para construir", categoria: "Terrenos", localizacao: "Floresta, Bagé/RS", preco: "R$ 125.000", quartos: 0, area: "360 m²", imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" },
];

export default function App() {
  const [categoria, setCategoria] = useState("Todos");
  const [selecionado, setSelecionado] = useState<Imovel | null>(null);
  const filtrados = useMemo(() => categoria === "Todos" ? imoveis : imoveis.filter((item) => item.categoria === categoria), [categoria]);

  return (
    <main>
      <header className="nav"><div className="marca">CORONILHA<span> IMOBILIÁRIA</span></div><nav><a href="#inicio">Início</a><a href="#catalogo">Imóveis</a><a href="#sobre">Sobre nós</a><a href="#contato">Contato</a></nav></header>
      <section id="inicio" className="hero hero-centered"><div className="hero-copy"><div className="hero-logo">CORONILHA</div><h1>Coronilha, negócios rurais</h1><p>Imóveis selecionados para quem valoriza localização, qualidade e tranquilidade.</p></div></section>
      <section className="categories"><button onClick={() => setCategoria("Todos")}>Gados <span>↗</span></button><button onClick={() => setCategoria("Todos")}>Campos <span>↗</span></button></section>
      <section id="catalogo" className="section"><div className="section-heading"><div><p className="eyebrow">NOSSO CATÁLOGO</p><h2>Encontre o lugar certo.</h2></div><div className="filters">{["Todos", "Imóveis", "Terrenos"].map((item) => <button className={categoria === item ? "active" : ""} key={item} onClick={() => setCategoria(item)}>{item}</button>)}</div></div><div className="grid">{filtrados.map((item) => <article className="property" key={item.id} onClick={() => setSelecionado(item)}><img src={item.imagem} alt={item.titulo} /><div className="property-body"><small>{item.categoria} · {item.localizacao}</small><h3>{item.titulo}</h3><p>{item.area}{item.quartos ? ` · ${item.quartos} quartos` : ""}</p><strong>{item.preco}</strong><button>Ver imóvel ↗</button></div></article>)}</div></section>
      <section id="sobre" className="about"><p className="eyebrow">SOBRE A CORONILHA</p><h2>Mais que imóveis.<br />Um novo começo.</h2><p>Somos uma imobiliária dedicada a aproximar pessoas de espaços que combinam com seus planos. Esta versão inicial apresenta a interface e o catálogo demonstrativo da Coronilha.</p></section>
      <footer id="contato"><div className="marca">CORONILHA<span> IMOBILIÁRIA</span></div><p>Vamos encontrar seu próximo endereço?</p><a className="button" href="mailto:contato@coronilha.com.br">Entrar em contato</a><small>© 2026 Coronilha Imobiliária · Bagé/RS</small></footer>
      {selecionado && <div className="modal" onClick={() => setSelecionado(null)}><div className="modal-content" onClick={(event) => event.stopPropagation()}><button className="close" onClick={() => setSelecionado(null)}>×</button><img src={selecionado.imagem} alt={selecionado.titulo} /><p className="eyebrow">{selecionado.categoria}</p><h2>{selecionado.titulo}</h2><p>{selecionado.localizacao} · {selecionado.area} · {selecionado.quartos || ""} {selecionado.quartos ? "quartos" : ""}</p><h3>{selecionado.preco}</h3><a className="button" href="mailto:contato@coronilha.com.br">Tenho interesse</a></div></div>}
    </main>
  );
}
