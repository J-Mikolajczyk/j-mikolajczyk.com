export default function Card({title, desc, link, site}) {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{desc}</p>
      <div className="horizontal container project-button-container">
        { site && <button className="project-button" onClick={() => openLink(site)}>Site</button> }
        <button className="project-button" onClick={() => openLink(link)}>Source</button>
      </div>
    </div>
  );
}
