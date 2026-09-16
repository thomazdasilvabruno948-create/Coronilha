const imagemReserva = "/fallback-rural.svg";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function ImagemComReserva({ src, alt, className }: Props) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = imagemReserva;
      }}
    />
  );
}