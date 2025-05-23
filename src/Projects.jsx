function Projects() {

    const openLink = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
      };

  return (
    <>
        <div class="container vertical"> 
        <h1>Projects</h1>
        <div class="container project-container">
            <div class="project-card">
                <h3 class="project-title">j-mikolajczyk.com</h3>
                <p class="project-desc">The source code for this website.</p>
                <div class="horizontal container project-button-container">
                    <button class="project-button" onClick={() => openLink('https://github.com/j-mikolajczyk/j-mikolajczyk.com')}>Source</button>
                </div>
            </div>
            <div class="project-card">
                <h3 class="project-title">Momentum</h3>
                <p class="project-desc">A Java Spring Boot application for tracking strength training.</p>
                <div class="horizontal container project-button-container">
                    <button class="project-button" onClick={() => openLink('https://training-momentum.com/')}>Site</button> 
                    <button class="project-button" onClick={() => openLink('https://github.com/J-Mikolajczyk/Momentum')}>Source</button> 
                </div>
            </div>
            <div class="project-card">
                <h3 class="project-title">Pokemon Sprite Fetcher</h3>
                <p class="project-desc">A simple chrome extension to fetch and display a Pokémon's sprite using PokeAPI.</p>
                <div class="horizontal container project-button-container">
                    <button class="project-button" onClick={() => openLink('https://github.com/j-mikolajczyk/pokemon-fetch')}>Source</button>
                </div>
            </div>
            <div class="project-card">
                <h3 class="project-title">Fantasy Football Stats w/ Machine Learning</h3>
                <p class="project-desc">A Jupyter notebook w/ ML techniques for projecting Fantasy Football points.</p>
                <div class="horizontal container project-button-container">
                    <button class="project-button" onClick={() => openLink('https://github.com/j-mikolajczyk/fantasy-football')}>Source</button>
                </div>
            </div>
            <div class="project-card">
                <h3 class="project-title">Motion Detection System w/ Raspberry Pi</h3>
                <p class="project-desc">A program for a Raspberry Pi to detect motion and record video.</p>
                <div class="horizontal container project-button-container">
                    <button class="project-button" onClick={() => openLink('https://github.com/j-mikolajczyk/motion-detection-system')}>Source</button> 
                </div>
            </div>
            <div class="project-card">
                <h3 class="project-title">NBA Big Data Analysis</h3>
                <p class="project-desc">An Apache Spark program to calculate NBA "clutch" scores.</p>
                <div class="horizontal container project-button-container">
                    <button class="project-button" onClick={() => openLink('https://github.com/J-Mikolajczyk/NBA-Big-Data')}>Source</button> 
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects
