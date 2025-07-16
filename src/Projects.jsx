import Card from "./Card";

function Projects() {

    const projects = [
        {
            title: 'j-mikolajczyk.com',
            desc: 'The source code for this website.',
            link: 'https://github.com/j-mikolajczyk/j-mikolajczyk.com'
        },
        {
            title: 'That One Gym',
            desc: 'A website for locating gyms in your area based on equipment availability.',
            link: 'https://github.com/J-Mikolajczyk/That-One-Gym',
            site: 'https://thatonegym.com/'
        },
        {
            title: 'Momentum',
            desc: 'A full stack web application for tracking strength training.',
            link: 'https://github.com/J-Mikolajczyk/Momentum',
            site: 'https://training-momentum.com/'
        },
        {
            title: 'Pokemon Sprite Fetcher',
            desc: "A simple chrome extension to fetch and display a Pokémon's sprite using PokeAPI.",
            link: 'https://github.com/j-mikolajczyk/pokemon-fetch'
        },
        {
            title: 'Fantasy Football Stats w/ Machine Learning',
            desc: 'A Jupyter notebook w/ ML techniques for projecting Fantasy Football points.',
            link: 'https://github.com/j-mikolajczyk/fantasy-football'
        },
        {
            title: 'Motion Detection System w/ Raspberry Pi',
            desc: 'A program for a Raspberry Pi to detect motion and record video.',
            link: 'https://github.com/j-mikolajczyk/motion-detection-system'
        },
        {
            title: 'NBA Big Data Analysis',
            desc: 'An Apache Spark program to calculate NBA "clutch" scores.',
            link: 'https://github.com/J-Mikolajczyk/NBA-Big-Data'
        }
    ]

  return (
    <>
        <div class="container vertical"> 
        <h1>Projects</h1>
        <div class="container project-container">
            {projects.map((proj, index) => (
                <Card 
                    key={index}
                    title={proj.title} 
                    desc={proj.desc} 
                    link={proj.link} 
                    site={proj.site} 
                />
            ))}
        </div>
    </div>
    </>
  )
}

export default Projects
