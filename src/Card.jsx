export default function Card({title, desc, link, site}) {
    const openLink = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <div class="project-card">
            <h3 class="project-title">{title}</h3>
            <p class="project-desc">{desc}</p>
            <div class="horizontal container project-button-container">
                { site ? <button class="project-button" onClick={() => openLink({site})}>Site</button> : null }
                <button class="project-button" onClick={() => openLink({link})}>Source</button>
            </div>
        </div>
    )
}