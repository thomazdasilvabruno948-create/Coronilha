import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer>
      <div className="marca">CORONILHA<span> NEGÓCIOS RURAIS</span></div>
      <p>Vamos encontrar sua próxima oportunidade no campo?</p>
      <Link className="button" to="/contato">Entrar em contato ↗</Link>
      <small>© 2026 Coronilha Negócios Rurais · Bagé/RS</small>
    </footer>
  );
}
