type FooterProps = {
  navegar: (path: string) => void;
};

export default function Footer({ navegar }: FooterProps) {
  return (
    <footer>
      <div className="marca">CORONILHA<span> NEGÓCIOS RURAIS</span></div>
      <p>Vamos encontrar sua próxima oportunidade no campo?</p>
      <button className="button" onClick={() => navegar("/contato")}>Entrar em contato ↗</button>
      <small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small>
    </footer>
  );
}