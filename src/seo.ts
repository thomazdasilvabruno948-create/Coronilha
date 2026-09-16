const siteName = "Coronilha Negócios Rurais";
const defaultDescription =
  "Coronilha Negócios Rurais — oportunidades demonstrativas em gados, campos e propriedades rurais na região da Campanha Gaúcha.";

type SeoData = {
  title: string;
  description: string;
  type?: "website" | "article";
};

const routeSeo: Record<string, SeoData> = {
  "/": { title: "Coronilha | Negócios Rurais", description: defaultDescription },
  "/gados": {
    title: "Gados | Coronilha Negócios Rurais",
    description: "Confira os anúncios demonstrativos de gados da Coronilha Negócios Rurais.",
  },
  "/campos": {
    title: "Campos | Coronilha Negócios Rurais",
    description: "Explore campos e propriedades rurais demonstrativas na região da Campanha Gaúcha.",
  },
  "/sobre": {
    title: "Sobre nós | Coronilha Negócios Rurais",
    description: "Conheça a proposta da Coronilha Negócios Rurais e sua visão de conectar pessoas a oportunidades no campo.",
  },
  "/contato": {
    title: "Contato | Coronilha Negócios Rurais",
    description: "Entre em contato com a Coronilha Negócios Rurais para tirar dúvidas e conhecer as oportunidades disponíveis.",
  },
  "/faq": {
    title: "Perguntas frequentes | Coronilha Negócios Rurais",
    description: "Veja respostas sobre o catálogo, os anúncios demonstrativos e a proposta da Coronilha Negócios Rurais.",
  },
};

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(pathname: string) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  const hostname = window.location.hostname;
  const isPreviewHost = hostname.endsWith(".vercel.app") || hostname === "localhost";
  if (isPreviewHost) {
    existing?.remove();
    return;
  }
  const canonical = existing ?? document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = `${window.location.origin}${pathname || "/"}`;
  if (!existing) document.head.appendChild(canonical);
}

export function updateSeo(pathname = window.location.pathname) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const detailMatch = normalizedPath.match(/^\/(gados|campos)\/([^/]+)$/i);
  const data = routeSeo[normalizedPath] ??
    (detailMatch
      ? {
          title: `${detailMatch[2].replace(/-/g, " ")} | ${siteName}`,
          description: "Confira os detalhes deste anúncio da Coronilha Negócios Rurais.",
          type: "article" as const,
        }
      : {
          title: `Página não encontrada | ${siteName}`,
          description: "A página solicitada não foi encontrada. Volte à página inicial da Coronilha Negócios Rurais.",
        });

  document.title = data.title;
  setMeta("name", "description", data.description);
  setMeta("property", "og:title", data.title);
  setMeta("property", "og:description", data.description);
  setMeta("property", "og:type", data.type ?? "website");
  setMeta("property", "og:site_name", siteName);
  setMeta("name", "twitter:card", "summary");
  setMeta("name", "twitter:title", data.title);
  setMeta("name", "twitter:description", data.description);
  setCanonical(normalizedPath);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    description: defaultDescription,
    inLanguage: "pt-BR",
  };

  let script = document.head.querySelector<HTMLScriptElement>('script[data-seo="website-schema"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seo = "website-schema";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(structuredData);
}
