import { useState } from 'react'

function Header() {

  return (
    <>
      <header>
        <div class="horizontal container navigation">
            <button id="home-button" class="nav-button">Home</button>
            <button id="about-button" class="nav-button">About</button>
            <button id="projects-button" class="nav-button">Projects</button>
            <button id="github-button" class="nav-button">GitHub</button>
        </div>
      </header>
    </>
  )
}

export default Header
