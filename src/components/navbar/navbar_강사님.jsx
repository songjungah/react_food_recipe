import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar()
{
  return(
    <nav className='nav-flex-container'>
      <h2 className='nav-logo'>
        <Link to={'/'}>음식 레시피 앱</Link>
      </h2>
      <form>
        <input type='text' name='search' placeholder='재료명을 입력하세요'
        className='nav-search-input'/>
      </form>
      <ul className='nav-link-ul'>
        <li>
          <NavLink to={'/'} className='nav-link-li'>홈페이지</NavLink>
        </li>
        <li>
          <NavLink to={'/favorites'} className='nav-link-li'>즐겨찾기</NavLink>
        </li>
      </ul>
    </nav>
  )
}
