import { useEffect, useMemo, useState } from "react";

type Negocio = {
  slug: string;
  id: number;
  titulo: string;
  categoria: string;
  localizacao: string;
  preco: string;
  peso: string;
  descricao: string;
  imagem: string;
  imagens: string[];
};

const imagemReserva = "/fallback-rural.svg";

const negocios: Negocio[] = [
  {
    slug: "gado-hereford",
    id: 1,
    titulo: "Gado Hereford",
    categoria: "Gados",
    localizacao: "Bagé/RS",
    preco: "R$ 8.500 por animal",
    peso: "650 kg",
    descricao:
      "Exemplo fictício de reprodutor Hereford, com boa conformação, rusticidade e aptidão para produção de carne.",
    imagem:
      "https://images.unsplash.com/photo-1560114928-40f299870436?auto=format&fit=crop&w=1200&q=80",
    imagens: [
      "https://images.unsplash.com/photo-1560114928-40f299870436?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "lote-de-terneiros-braford",
    id: 2,
    titulo: "Lote de terneiros Braford",
    categoria: "Gados",
    localizacao: "Dom Pedrito/RS",
    preco: "R$ 3.200 por animal",
    peso: "280 kg",
    descricao:
      "Exemplo fictício de lote de terneiros Braford, indicado para recria e terminação em sistema de campo.",
    imagem:
      "https://images.unsplash.com/photo-1545468259-4c7d8f7f3f3f?auto=format&fit=crop&w=1200&q=80",
    imagens: [
      "https://images.unsplash.com/photo-1545468259-4c7d8f7f3f3f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "campo-para-criacao-de-gado",
    id: 3,
    titulo: "Campo para criação de gado",
    categoria: "Campos",
    localizacao: "Aceguá/RS",
    preco: "R$ 18.000 por hectare",
    peso: "120 hectares",
    descricao:
      "Exemplo fictício de área rural com campos abertos, espaço para manejo e potencial para criação de gado.",
    imagem:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    imagens: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "campo-nativo-com-aguadas",
    id: 4,
    titulo: "Campo nativo com aguadas",
    categoria: "Campos",
    localizacao: "Lavras do Sul/RS",
    preco: "R$ 15.500 por hectare",
    peso: "85 hectares",
    descricao:
      "Exemplo fictício de campo nativo com aguadas e paisagem típica da Campanha Gaúcha, ideal para projetos rurais.",
    imagem:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    imagens: [
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

const perguntasFrequentes = [
  {
    pergunta: "Os anúncios do catálogo são reais?",
    resposta:
      "Nesta versão demonstrativa, os anúncios são fictícios e servem apenas para apresentar a estrutura da Coronilha.",
  },
  {
    pergunta: "Como posso demonstrar interesse em um anúncio?",
    resposta:
      "Abra a página do anúncio e clique em ‘Tenho interesse’. O botão abrirá uma mensagem de e-mail para iniciar o contato.",
  },
  {
    pergunta: "A Coronilha trabalha com gados e campos?",
    resposta:
      "Sim. A proposta da Coronilha é aproximar pessoas de oportunidades relacionadas a gados e propriedades rurais.",
  },
  {
    pergunta: "Posso entrar em contato para tirar dúvidas?",
    resposta:
      "Sim. Acesse nossa página de contato para encontrar telefone, endereço, redes sociais e WhatsApp.",
  },
];

function ImagemComReserva({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={(evento) => {
        evento.currentTarget.onerror = null;
        evento.currentTarget.src = imagemReserva;
      }}
    />
  );
}

export default function App() {
  const [categoria, setCategoria] = useState("Todos");
  const [pagina, setPagina] = useState<Negocio | null>(null);
  const [sobre, setSobre] = useState(false);
  const [contato, setContato] = useState(false);
  const [faqAberta, setFaqAberta] = useState<number | null>(null);
  const [fotoSelecionada, setFotoSelecionada] = useState(0);

  useEffect(() => {
    const carregarRotaAtual = () => {
      const caminho = window.location.pathname.replace(/^\/+|\/+$/g, "");

      const item = negocios.find(
        (negocio) =>
          caminho === `${negocio.categoria.toLowerCase()}/${negocio.slug}`,
      );

      setPagina(item || null);
      setSobre(false);
      setContato(false);
      setFotoSelecionada(0);

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    };

    carregarRotaAtual();

    window.addEventListener("popstate", carregarRotaAtual);

    return () => {
      window.removeEventListener("popstate", carregarRotaAtual);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    if (pagina) {
      document.title = `${pagina.titulo} | Coronilha Negócios Rurais`;
    } else if (sobre) {
      document.title = "Sobre nós | Coronilha Negócios Rurais";
    } else if (contato) {
      document.title = "Contato | Coronilha Negócios Rurais";
    } else {
      document.title = "Coronilha | Negócios Rurais";
    }
  }, [pagina, sobre, contato]);

  const filtrados = useMemo(
    () =>
      categoria === "Todos"
        ? negocios
        : negocios.filter((item) => item.categoria === categoria),
    [categoria],
  );

  const abrirPagina = (item: Negocio) => {
    setPagina(item);
    setSobre(false);
    setContato(false);
    setFotoSelecionada(0);

    window.history.pushState(
      { slug: item.slug },
      "",
      `/${item.categoria.toLowerCase()}/${item.slug}`,
    );

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const voltarInicio = () => {
    setPagina(null);
    setSobre(false);
    setContato(false);
    setFotoSelecionada(0);

    window.history.pushState({}, "", "/");

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const cabecalho = (
    <header className="nav">
      <a className="marca" href="/" onClick={voltarInicio}>
        CORONILHA<span> NEGÓCIOS RURAIS</span>
      </a>

      <nav>
        <a
          href="/#catalogo"
          onClick={() => {
            setPagina(null);
            setSobre(false);
            setContato(false);
            setCategoria("Campos");
          }}
        >
          Campos
        </a>

        <a
          href="/#catalogo"
          onClick={() => {
            setPagina(null);
            setSobre(false);
            setContato(false);
            setCategoria("Gados");
          }}
        >
          Gado
        </a>

        <a
          href="/#sobre"
          onClick={() => {
            setPagina(null);
            setSobre(true);
            setContato(false);
            window.history.pushState({}, "", "/sobre");
          }}
        >
          Sobre nós
        </a>

        <a
          href="/#contato-page"
          onClick={() => {
            setPagina(null);
            setSobre(false);
            setContato(true);
            window.history.pushState({}, "", "/contato");
          }}
        >
          Entre em contato
        </a>
      </nav>
    </header>
  );

  if (pagina) {
    return (
      <main>
        {cabecalho}

        <section className="section detail-page">
          <button className="back-link" onClick={voltarInicio}>
            ← Voltar ao catálogo
          </button>

          <div className="detail-layout">
            <div className="detail-gallery">
              <ImagemComReserva
                className="detail-image"
                src={pagina.imagens[fotoSelecionada] || pagina.imagem}
                alt={`${pagina.titulo} - foto ${fotoSelecionada + 1}`}
              />

              <div
                className="detail-thumbnails"
                aria-label="Outras fotos deste anúncio"
              >
                {pagina.imagens.map((foto, index) => (
                  <button
                    className={`detail-thumbnail ${
                      fotoSelecionada === index ? "selected" : ""
                    }`}
                    key={`${pagina.id}-${index}`}
                    onClick={() => setFotoSelecionada(index)}
                    aria-label={`Ver foto ${index + 1}`}
                  >
                    <ImagemComReserva
                      src={foto}
                      alt={`Miniatura ${index + 1} de ${pagina.titulo}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="detail-copy">
              <p className="eyebrow">{pagina.categoria}</p>
              <h1>{pagina.titulo}</h1>
              <p className="detail-location">{pagina.localizacao}</p>
              <p>{pagina.descricao}</p>

              <div className="detail-info">
                <div>
                  <small>Peso ou área</small>
                  <strong>{pagina.peso}</strong>
                </div>

                <div>
                  <small>Valor demonstrativo</small>
                  <strong>{pagina.preco}</strong>
                </div>
              </div>

              <p className="notice">
                Este anúncio é fictício e serve apenas para demonstrar a
                apresentação de oportunidades rurais.
              </p>

              <a
                className="button"
                href={`mailto:contato@coronilha.com.br?subject=Interesse%20em%20${encodeURIComponent(
                  pagina.titulo,
                )}`}
              >
                Tenho interesse ↗
              </a>
            </div>
          </div>

          {pagina.categoria === "Campos" && (
            <div className="detail-map">
              <div className="detail-map-heading">
                <div>
                  <p className="eyebrow">LOCALIZAÇÃO</p>
                  <h2>Veja a região do campo.</h2>
                  <p>Mapa demonstrativo da região informada no anúncio.</p>
                </div>
              </div>

              <div className="detail-map-grid">
                <div className="detail-map-panel">
                  <iframe
                    title={`Mapa demonstrativo de ${pagina.titulo}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      `${pagina.localizacao}, Brasil`,
                    )}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="detail-terrain-panel">
                  <div className="terrain-image-wrap">
                    <ImagemComReserva
                      src={pagina.imagens[1] || pagina.imagem}
                      alt={`Imagem ilustrativa da área rural de ${pagina.localizacao}`}
                    />

                    <svg
                      className="terrain-boundary"
                      viewBox="0 0 400 300"
                      aria-hidden="true"
                    >
                      <polygon points="72,58 286,38 350,126 294,252 112,238 48,150" />
                    </svg>

                    <span className="terrain-label">Área ilustrativa</span>
                  </div>
                </div>
              </div>

              <a
                className="button"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  `${pagina.localizacao}, Brasil`,
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Como chegar ↗
              </a>

              <p className="detail-map-note">
                A localização e a demarcação exibidas são ilustrativas e
                representam apenas a região do anúncio.
              </p>
            </div>
          )}
        </section>

        <footer>
          <div className="marca">
            CORONILHA<span> NEGÓCIOS RURAIS</span>
          </div>

          <p>Vamos encontrar sua próxima oportunidade no campo?</p>

          <button
            className="button"
            onClick={() => {
              setPagina(null);
              setContato(true);
              window.history.pushState({}, "", "/contato");
            }}
          >
            Entrar em contato
          </button>

          <small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small>
        </footer>
      </main>
    );
  }

  if (sobre) {
    return (
      <main>
        {cabecalho}

        <section id="sobre" className="section about detail-page">
          <p className="eyebrow">SOBRE A CORONILHA</p>

          <h1>
            Mais que negócios.
            <br />
            Um novo começo.
          </h1>

          <p>
            Somos uma empresa dedicada a aproximar pessoas de oportunidades
            no campo. Os itens apresentados nesta versão são exemplos fictícios
            para demonstrar a estrutura do catálogo.
          </p>

          <div className="owner-profile">
            <div
              className="owner-photo-placeholder"
              role="img"
              aria-label="Espaço reservado para foto de Arthur Macedo"
            >
              FOTO
            </div>

            <h2>Arthur Macedo</h2>

            <p className="owner-description">
              Arthur Macedo é um empreendedor apaixonado pelo campo e pela
              construção de relações de confiança. Com uma visão voltada para o
              futuro, busca conectar pessoas, propriedades e oportunidades,
              valorizando a tradição rural e novas formas de fazer negócios.
            </p>

            <div className="owner-contacts">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Facebook</strong>
                <span>@coronilha.negociosrurais ↗</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Instagram</strong>
                <span>@coronilha.negociosrurais ↗</span>
              </a>

              <a href="tel:+5553999999999">
                <strong>Telefone</strong>
                <span>(53) 99999-9999 ↗</span>
              </a>

              <a
                href="https://maps.google.com/?q=Bage+RS"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Endereço</strong>
                <span>Bagé, Rio Grande do Sul ↗</span>
              </a>
            </div>
          </div>

          <button className="button" onClick={voltarInicio}>
            Voltar para a home ↗
          </button>
        </section>

        <footer>
          <div className="marca">
            CORONILHA<span> NEGÓCIOS RURAIS</span>
          </div>

          <p>Vamos encontrar sua próxima oportunidade no campo?</p>

          <button
            className="button"
            onClick={() => {
              setSobre(false);
              setContato(true);
              window.history.pushState({}, "", "/contato");
            }}
          >
            Entrar em contato
          </button>

          <small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small>
        </footer>
      </main>
    );
  }

  if (contato) {
    return (
      <main>
        {cabecalho}

        <section
          id="contato-page"
          className="section contact-page detail-page"
        >
          <p className="eyebrow">FALE CONOSCO</p>

          <h1>Entre em contato.</h1>

          <p>
            Estamos prontos para atender você, tirar dúvidas e ajudar a
            encontrar sua próxima oportunidade rural.
          </p>

          <div className="contact-layout">
            <div className="contact-info">
              <a href="tel:+5553999999999">
                <strong>Telefone</strong>
                <span>(53) 99999-9999</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Instagram</strong>
                <span>@coronilha.negociosrurais ↗</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Facebook</strong>
                <span>Coronilha Negócios Rurais ↗</span>
              </a>

              <a
                href="https://maps.google.com/?q=Bage+RS"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Endereço</strong>
                <span>Bagé, Rio Grande do Sul ↗</span>
              </a>

              <a
                className="button"
                href="https://wa.me/5553999999999"
                target="_blank"
                rel="noreferrer"
              >
                Falar pelo WhatsApp ↗
              </a>
            </div>

            <div className="contact-map">
              <iframe
                title="Mapa de localização da Coronilha em Bagé"
                src="https://www.google.com/maps?q=Bag%C3%A9%2C%20Rio%20Grande%20do%20Sul&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                className="button"
                href="https://www.google.com/maps/dir/?api=1&destination=Bag%C3%A9%2C%20Rio%20Grande%20do%20Sul"
                target="_blank"
                rel="noreferrer"
              >
                Como chegar ↗
              </a>
            </div>
          </div>

          <button className="back-link" onClick={voltarInicio}>
            ← Voltar para a home
          </button>
        </section>

        <footer>
          <div className="marca">
            CORONILHA<span> NEGÓCIOS RURAIS</span>
          </div>

          <p>Vamos encontrar sua próxima oportunidade no campo?</p>

          <small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small>
        </footer>
      </main>
    );
  }

  return (
    <main>
      {cabecalho}

      <section id="inicio" className="hero hero-centered">
        <div className="hero-copy">
          <div
            className="hero-logo-placeholder"
            aria-label="Espaço reservado para a logo da empresa"
          >
            LOGO
          </div>

          <div className="hero-logo">CORONILHA</div>

          <h1>Coronilha, negócios rurais</h1>

          <p>
            Gados e campos selecionados para quem valoriza a vida rural, a
            qualidade e novas oportunidades.
          </p>
        </div>
      </section>

      <section className="categories">
        <article className="category-card">
          <ImagemComReserva
            src="https://images.unsplash.com/photo-1500595046743-cd271d6497c0?auto=format&fit=crop&w=1200&q=85"
            alt="Gado pastando em uma propriedade rural"
          />

          <div className="category-card-body">
            <p className="eyebrow">NEGÓCIOS RURAIS</p>
            <h2>Gados</h2>

            <p>
              Conheça exemplos de animais disponíveis para negociação, com
              peso, preço demonstrativo e informações essenciais.
            </p>

            <button onClick={() => setCategoria("Gados")}>
              Ver gados <span>↗</span>
            </button>
          </div>
        </article>

        <article className="category-card">
          <ImagemComReserva
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
            alt="Campo aberto e paisagem rural"
          />

          <div className="category-card-body">
            <p className="eyebrow">PROPRIEDADES RURAIS</p>
            <h2>Campos</h2>

            <p>
              Explore exemplos de áreas rurais para criação, produção,
              investimento ou desenvolvimento de novos projetos.
            </p>

            <button onClick={() => setCategoria("Campos")}>
              Ver campos <span>↗</span>
            </button>
          </div>
        </article>
      </section>

      <section id="catalogo" className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">NOSSO CATÁLOGO</p>
            <h2>Encontre o negócio certo.</h2>
          </div>

          <div className="filters">
            {["Todos", "Gados", "Campos"].map((item) => (
              <button
                className={categoria === item ? "active" : ""}
                key={item}
                onClick={() => setCategoria(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid">
          {filtrados.map((item) => (
            <article
              className="property"
              key={item.id}
              onClick={() => abrirPagina(item)}
            >
              <ImagemComReserva src={item.imagem} alt={item.titulo} />

              <div className="property-body">
                <small>
                  {item.categoria} · {item.localizacao}
                </small>

                <h3>{item.titulo}</h3>
                <p>{item.peso}</p>
                <p>{item.descricao}</p>
                <strong>{item.preco}</strong>

                <button
                  onClick={(evento) => {
                    evento.stopPropagation();
                    abrirPagina(item);
                  }}
                >
                  Ver página ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="perguntas-frequentes" className="section faq-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DÚVIDAS</p>
            <h2>Perguntas frequentes.</h2>
          </div>

          <p>Encontre respostas rápidas sobre a Coronilha e nosso catálogo.</p>
        </div>

        <div className="faq-list">
          {perguntasFrequentes.map((item, index) => (
            <div
              className={`faq-item ${
                faqAberta === index ? "open" : ""
              }`}
              key={item.pergunta}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setFaqAberta(faqAberta === index ? null : index)
                }
                aria-expanded={faqAberta === index}
              >
                {item.pergunta}
                <span>{faqAberta === index ? "−" : "+"}</span>
              </button>

              {faqAberta === index && <p>{item.resposta}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="marca">
          CORONILHA<span> NEGÓCIOS RURAIS</span>
        </div>

        <p>Vamos encontrar sua próxima oportunidade no campo?</p>

        <button
          className="button"
          onClick={() => {
            setContato(true);
            setCategoria("Todos");
            window.history.pushState({}, "", "/contato");
          }}
        >
          Entrar em contato
        </button>

        <small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small>
      </footer>
    </main>
  );
}
