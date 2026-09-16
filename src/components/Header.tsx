import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="nav">
      <Link className="marca" to="/">
        CORONILHA<span> NEGÓCIOS RURAIS</span>
      </Link>
      <nav>
        <Link to="/campos">Campos</Link>
        <Link to="/gados">Gado</Link>
        <Link to="/sobre">Sobre nós</Link>
        <Link to="/contato">Entre em contato</Link>
      </nav>
    </header>
  );
}
