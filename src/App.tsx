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

const perguntasFrequentes = [
  { pergunta: "Os anúncios do catálogo são reais?", resposta: "Nesta versão demonstrativa, os anúncios são fictícios e servem apenas para apresentar a estrutura da Coronilha." },
  { pergunta: "Como posso demonstrar interesse em um anúncio?", resposta: "Abra a página do anúncio e clique em ‘Tenho interesse’. O botão abrirá uma mensagem de e-mail para iniciar o contato." },
  { pergunta: "A Coronilha trabalha com gados e campos?", resposta: "Sim. A proposta da Coronilha é aproximar pessoas de oportunidades relacionadas a gados e propriedades rurais." },
  { pergunta: "Posso entrar em contato para tirar dúvidas?", resposta: "Sim. Utilize o botão ‘Entrar em contato’ no rodapé da página para enviar uma mensagem." },
];

export default function App() {
  const [categoria, setCategoria] = useState("Todos");
  const [pagina, setPagina] = useState<Negocio | null>(null);
  const [sobre, setSobre] = useState(false);
  const [faqAberta, setFaqAberta] = useState<number | null>(null);
  const filtrados = useMemo(() => categoria === "Todos" ? negocios : negocios.filter((item) => item.categoria === categoria), [categoria]);

  const voltarInicio = () => {
    setPagina(null);
    setSobre(false);
  };

  const cabecalho = (
    <header className="nav">
      <a className="marca" href="#inicio" onClick={voltarInicio}>CORONILHA<span> NEGÓCIOS RURAIS</span></a>
      <nav>
        <a href="#catalogo" onClick={() => { setPagina(null); setSobre(false); setCategoria("Campos"); }}>Campos</a>
        <a href="#catalogo" onClick={() => { setPagina(null); setSobre(false); setCategoria("Gados"); }}>Gado</a>
        <a href="#sobre" onClick={() => { setPagina(null); setSobre(true); }}>Sobre nós</a>
        <a href="#contato" onClick={() => { setPagina(null); setSobre(false); }}>Entre em contato</a>
      </nav>
    </header>
  );

  if (pagina) {
    return (
      <main>
        {cabecalho}
        <section className="section detail-page">
          <button className="back-link" onClick={voltarInicio}>← Voltar ao catálogo</button>
          <div className="detail-layout">
            <img className="detail-image" src={pagina.imagem} alt={pagina.titulo} />
            <div className="detail-copy"><p className="eyebrow">{pagina.categoria}</p><h1>{pagina.titulo}</h1><p className="detail-location">{pagina.localizacao}</p><p>{pagina.descricao}</p><div className="detail-info"><div><small>Peso ou área</small><strong>{pagina.peso}</strong></div><div><small>Valor demonstrativo</small><strong>{pagina.preco}</strong></div></div><p className="notice">Este anúncio é fictício e serve apenas para demonstrar a apresentação de oportunidades rurais.</p><a className="button" href={`mailto:contato@coronilha.com.br?subject=Interesse%20em%20${encodeURIComponent(pagina.titulo)}`}>Tenho interesse ↗</a></div>
          </div>
        </section>
        <footer id="contato"><div className="marca">CORONILHA<span> NEGÓCIOS RURAIS</span></div><p>Vamos encontrar sua próxima oportunidade no campo?</p><a className="button" href="mailto:contato@coronilha.com.br">Entrar em contato</a><small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small></footer>
      </main>
    );
  }

  if (sobre) {
    return (
      <main>
        {cabecalho}
        <section id="sobre" className="section about detail-page"><p className="eyebrow">SOBRE A CORONILHA</p><h1>Mais que negócios.<br />Um novo começo.</h1><p>Somos uma empresa dedicada a aproximar pessoas de oportunidades no campo. Os itens apresentados nesta versão são exemplos fictícios para demonstrar a estrutura do catálogo.</p><button className="button" onClick={voltarInicio}>Voltar para a home ↗</button></section>
        <footer id="contato"><div className="marca">CORONILHA<span> NEGÓCIOS RURAIS</span></div><p>Vamos encontrar sua próxima oportunidade no campo?</p><a className="button" href="mailto:contato@coronilha.com.br">Entrar em contato</a><small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small></footer>
      </main>
    );
  }

  return (
    <main>
      {cabecalho}
      <section id="inicio" className="hero hero-centered"><div className="hero-copy"><div className="hero-logo-placeholder" aria-label="Espaço reservado para a logo da empresa">LOGO</div><div className="hero-logo">CORONILHA</div><h1>Coronilha, negócios rurais</h1><p>Gados e campos selecionados para quem valoriza a vida rural, a qualidade e novas oportunidades.</p></div></section>
      <section className="categories"><article className="category-card"><img src="https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1200&q=85" alt="Gado pastando em uma propriedade rural" /><div className="category-card-body"><p className="eyebrow">NEGÓCIOS RURAIS</p><h2>Gados</h2><p>Conheça exemplos de animais disponíveis para negociação, com peso, preço demonstrativo e informações essenciais.</p><button onClick={() => setCategoria("Gados")}>Ver gados <span>↗</span></button></div></article><article className="category-card"><img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" alt="Campo aberto e paisagem rural" /><div className="category-card-body"><p className="eyebrow">PROPRIEDADES RURAIS</p><h2>Campos</h2><p>Explore exemplos de áreas rurais para criação, produção, investimento ou desenvolvimento de novos projetos.</p><button onClick={() => setCategoria("Campos")}>Ver campos <span>↗</span></button></div></article></section>
      <section id="catalogo" className="section"><div className="section-heading"><div><p className="eyebrow">NOSSO CATÁLOGO</p><h2>Encontre o negócio certo.</h2></div><div className="filters">{["Todos", "Gados", "Campos"].map((item) => <button className={categoria === item ? "active" : ""} key={item} onClick={() => setCategoria(item)}>{item}</button>)}</div></div><div className="grid">{filtrados.map((item) => <article className="property" key={item.id} onClick={() => setPagina(item)}><img src={item.imagem} alt={item.titulo} /><div className="property-body"><small>{item.categoria} · {item.localizacao}</small><h3>{item.titulo}</h3><p>{item.peso}</p><p>{item.descricao}</p><strong>{item.preco}</strong><button onClick={() => setPagina(item)}>Ver página ↗</button></div></article>)}</div></section>
      <section id="perguntas-frequentes" className="section faq-section"><div className="section-heading"><div><p className="eyebrow">DÚVIDAS</p><h2>Perguntas frequentes.</h2></div><p>Encontre respostas rápidas sobre a Coronilha e nosso catálogo.</p></div><div className="faq-list">{perguntasFrequentes.map((item, index) => <div className={`faq-item ${faqAberta === index ? "open" : ""}`} key={item.pergunta}><button className="faq-question" onClick={() => setFaqAberta(faqAberta === index ? null : index)} aria-expanded={faqAberta === index}>{item.pergunta}<span>{faqAberta === index ? "−" : "+"}</span></button>{faqAberta === index && <p className="faq-answer">{item.resposta}</p>}</div>)}</div></section>
      <footer id="contato"><div className="marca">CORONILHA<span> NEGÓCIOS RURAIS</span></div><p>Vamos encontrar sua próxima oportunidade no campo?</p><a className="button" href="mailto:contato@coronilha.com.br">Entrar em contato</a><small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small></footer>
    </main>
  );
}
