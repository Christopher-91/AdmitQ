import { useState } from 'react';

export default function Logo({ website, name, slug, size = 48 }) {
  const [errorLevel, setErrorLevel] = useState(0);
  
  const Placeholder = () => (
    <span className="uni-logo-placeholder" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.4 }}>
      {name ? name[0] : 'U'}
    </span>
  );

  if (!website) {
    return <Placeholder />;
  }

  let hostname = '';
  try {
    hostname = new URL(website).hostname.replace('www.', '');
  } catch (e) {
    return <Placeholder />;
  }

  // errorLevel 0: Local Image from Wikipedia Scraper
  if (errorLevel === 0 && slug) {
    return (
      <img 
        src={`/logos/${slug}.png`} 
        alt={name} 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onError={() => setErrorLevel(1)}
      />
    );
  }

  // errorLevel 1: Clearbit Logo
  if (errorLevel === 1 || (errorLevel === 0 && !slug)) {
    return (
      <img 
        src={`https://logo.clearbit.com/${hostname}?size=${size * 2}`} 
        alt={name} 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onError={() => setErrorLevel(2)}
      />
    );
  }

  return <Placeholder />;
}
