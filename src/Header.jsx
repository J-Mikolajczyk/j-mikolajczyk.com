// Header.jsx
function Header({ onNavigate }) {
  const openGitHub = () => {
    window.open('https://github.com/j-mikolajczyk', '_blank', 'noopener,noreferrer');
  };

  return (
    <header>
      <div className="horizontal container navigation">
        <button className="nav-button" onClick={() => onNavigate('about')}>About</button>
        <button className="nav-button" onClick={() => onNavigate('projects')}>Projects</button>
        <button className="nav-button" onClick={openGitHub}>GitHub</button>
      </div>
    </header>
  );
}

export default Header;
