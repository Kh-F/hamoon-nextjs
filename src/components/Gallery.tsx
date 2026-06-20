'use client';

import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function Gallery() {
  const { c } = useLang();
  const { gallery, galleryTitle, galleryLead } = c;

  return (
    <section id="gallery" className="section-card-bg">
      <div className="section">
        <div className="section-center" style={{ marginBottom: 'var(--space-10)' }}>
          <h2 className="section-title">{galleryTitle}</h2>
          <p className="section-lead">{galleryLead}</p>
        </div>

        <div className="gallery-grid">
          {gallery.map(tile => (
            <figure
              key={tile.caption}
              className="gallery-tile"
              style={{ gridRow: `span ${tile.span}`, background: tile.g }}
            >
              <span className="gallery-tile-icon">
                <Icon name={tile.ic} size={40} />
              </span>
              <figcaption>{tile.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
