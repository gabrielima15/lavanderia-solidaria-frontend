import { Link } from 'react-router-dom';

export default function Brand({ footer = false, tagline }) {
  return (
    <Link
      to="/"
      className={`brand ${footer ? 'brand--footer' : ''}`}
      aria-label="Lavanderia Solidária - início"
    >
      <span className="brand__mark" aria-hidden="true">♡</span>
      <span className="brand__name">
        {tagline ? (
          <>Lavanderia Solidária<small>{tagline}</small></>
        ) : (
          <>Lavanderia<br />Solidária</>
        )}
      </span>
    </Link>
  );
}
