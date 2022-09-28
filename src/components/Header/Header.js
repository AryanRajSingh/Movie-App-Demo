import { Link } from 'react-router-dom';
import './Header.scss';
import user from '../../images/user.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <Link>
          <span>Movie App</span>
        </Link>
        <div className='user-img'>
          <img src={user} alt='user' />
        </div>
      </div>
    </header>
  );
};

export default Header;
