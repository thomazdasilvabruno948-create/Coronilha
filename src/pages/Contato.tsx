export default function Contato() {
  return (
    <section id="contato-page" className="section detail-page">
      <p className="eyebrow">CONTATO</p>
      <h1>Vamos conversar.</h1>
      <p>Entre em contato para tirar dúvidas, apresentar uma oportunidade ou saber mais sobre a Coronilha.</p>
      <div className="contact-grid">
        <a className="contact-card" href="mailto:contato@coronilha.com.br"><strong>E-mail</strong><span>contato@coronilha.com.br ↗</span></a>
        <a className="contact-card" href="https://wa.me/5553999999999" target="_blank" rel="noreferrer"><strong>WhatsApp</strong><span>Falar pelo WhatsApp ↗</span></a>
        <a className="contact-card" href="https://www.google.com/maps/?q=Bage,RS" target="_blank" rel="noreferrer"><strong>Localização</strong><span>Bagé, Rio Grande do Sul ↗</span></a>
      </div>
    </section>
  );
}