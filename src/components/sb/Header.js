'use client';

import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';

export default function Header({ blok }) {
function A({ href = '/', children, className = '' }) {
  const isExternal = /^https?:\/\//i.test(href);
  return isExternal
    ? <a href={href} className={className} rel="noopener noreferrer">{children}</a>
    : <Link href={href} className={className}>{children}</Link>;
}

function CartIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M2 3h3l3.6 12.59a2 2 0 0 0 2 1.41h7.7a2 2 0 0 0 2-1.6L22 7H6" />
    </svg>
  );
}


  // --- Bygg navigation ---
  // 1) Stöd för din nuvarande setup: tre separata Link-fält
  const field = (name) => blok[name] ?? blok[name?.toLowerCase()];
  const hardcodedNav = [
    { label: 'Products',  href: field('Products')?.cached_url  || field('Products')?.url },
    { label: 'About',     href: field('About')?.cached_url     || field('About')?.url },
  ].filter(x => !!x.href);

  // 2) Stöd för framtida/alternativ struktur: repeatable "nav" med {label, link}
  const listNav = Array.isArray(blok.nav)
    ? blok.nav.map(it => ({
        label: it?.label,
        href: it?.link?.cached_url || it?.link?.url
      })).filter(x => !!x.href && !!x.label)
    : [];

  const nav = listNav.length ? listNav : hardcodedNav;

  return (
    <header
      {...storyblokEditable(blok)}
      style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid #e5e7eb', background: '#f6f9ff' }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', gap: 24, padding: '0 16px' }}>
        {/* Brand */}
        <A href="/">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {logo && <img src={logo} alt={title} width={24} height={24} style={{ objectFit: 'contain' }} />}
            <strong>{title}</strong>
          </span>
        </A>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {nav.map((item, i) => (
            <A key={`${item.label}-${i}`} href={item.href}>
              <span style={{ fontSize: 14 }}>{item.label}</span>
            </A>
          ))}
        </nav>

        {/* Right */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          {searchBarBlok && <SearchBarInline placeholder={searchBarBlok.placeholder || 'Search'} />}

          <A href="/cart">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {bagAsset
                ? <img src={bagAsset.filename} alt="Cart" width={18} height={18} />
                : <CartIcon />
              }
              <span style={{ fontSize: 14 }}>{cartCount}</span>
            </span>
          </A>
        </div>
      </div>
    </header>
  );
}


