import './NavBar.scss';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar__name'>
      <h1 className='navbar__title'>Hollis McGowan Wickham</h1>
      </div>
      <div className='navbar__links '>
        <p className='navbar__link'> About</p>
        <p className='navbar__link'> Services</p>
        <p className='navbar__link'> Journalism</p>
        <p className='navbar__link'> Projects</p>
        <p className='navbar__link'> Blog</p>
      </div>
    </div>
  )
}

export default NavBar;