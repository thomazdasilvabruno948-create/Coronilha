export type CategoriaNegocio = "Gados" | "Campos";

export type Negocio = {
  id: number;
  slug: string;
  titulo: string;
  categoria: CategoriaNegocio;
  localizacao: string;
  preco: string;
  medida: string;
  descricao: string;
  imagem: string;
  imagens: string[];
};

export const negocios: Negocio[] = [
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