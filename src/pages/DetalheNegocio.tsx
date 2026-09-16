import { Link } from "@tanstack/react-router";
import { useState } from "react";
import ImagemComReserva from "../components/ImagemComReserva";
import type { Negocio } from "../data/negocios";

type Props = { item: Negocio };

export default function DetalheNegocio({ item }: Props) {
  const [fotoSelecionada, setFotoSelecionada] = useState(0);
  const base = item.categoria === "Gados" ? "/gados" : "/campos";

  return (
    <section className="section detail-page">
      <Link className="back-link" to={base}>← Voltar para {item.categoria.toLowerCase()}</Link>
      <div className="detail-layout">
        <div className="detail-gallery">
          <ImagemComReserva className="detail-image" src={item.imagens[fotoSelecionada] || item.imagem} alt={`${item.titulo} - foto ${fotoSelecionada + 1}`} />
          <div className="detail-thumbnails" aria-label="Fotos do anúncio">
            {item.imagens.map((foto, index) => (
              <button className={`detail-thumbnail ${fotoSelecionada === index ? "selected" : ""}`} key={`${item.id}-${index}`} onClick={() => setFotoSelecionada(index)} aria-label={`Ver foto ${index + 1}`}>
                <ImagemComReserva src={foto} alt={`Miniatura ${index + 1} de ${item.titulo}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{item.categoria}</p><h1>{item.titulo}</h1><p className="detail-location">{item.localizacao}</p><p>{item.descricao}</p>
          <div className="detail-info"><div><small>Peso ou área</small><strong>{item.medida}</strong></div><div><small>Valor demonstrativo</small><strong>{item.preco}</strong></div></div>
          <p className="notice">Este anúncio é fictício e serve apenas para demonstrar a apresentação de oportunidades rurais.</p>
          <a className="button" href={`mailto:contato@coronilha.com.br?subject=${encodeURIComponent(`Interesse em ${item.titulo}`)}`}>Tenho interesse ↗</a>
        </div>
      </div>
      {item.categoria === "Campos" && (
        <div className="detail-map">
          <div className="detail-map-heading"><p className="eyebrow">LOCALIZAÇÃO</p><h2>Veja a região do campo.</h2><p>Mapa demonstrativo da região informada no anúncio.</p></div>
          <div className="detail-map-grid">
            <div className="detail-map-panel"><iframe title={`Mapa de ${item.titulo}`} src={`https://www.google.com/maps?q=${encodeURIComponent(`${item.localizacao}, Brasil`)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
            <div className="detail-terrain-panel"><ImagemComReserva src={item.imagens[1] || item.imagem} alt={`Imagem ilustrativa de ${item.localizacao}`} /></div>
          </div>
          <a className="button" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${item.localizacao}, Brasil`)}`} target="_blank" rel="noreferrer">Como chegar ↗</a>
        </div>
      )}
    </section>
  );
}
