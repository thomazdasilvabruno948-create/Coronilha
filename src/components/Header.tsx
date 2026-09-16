type HeaderProps = {
  navegar: (path: string) => void;
};

export default function Header({ navegar }: HeaderProps) {
  return (
    <header className="nav">
      <a className="marca" href="/" onClick={(e) => { e.preventDefault(); navegar("/"); }}>
        CORONILHA<span> NEGÓCIOS RURAIS</span>
      </a>
      <nav>
        <a href="/campos" onClick={(e) => { e.preventDefault(); navegar("/campos"); }}>Campos</a>
        <a href="/gados" onClick={(e) => { e.preventDefault(); navegar("/gados"); }}>Gado</a>
        <a href="/sobre" onClick={(e) => { e.preventDefault(); navegar("/sobre"); }}>Sobre nós</a>
        <a href="/contato" onClick={(e) => { e.preventDefault(); navegar("/contato"); }}>Entre em contato</a>
      </nav>
    </header>
  );
}