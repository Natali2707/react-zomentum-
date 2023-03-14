import './styles.scss';
import { ReactComponent as LogoLink } from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <a href="/" className="header__logo">
          <LogoLink />
        </a>
        <nav className='header__navigator'>
          <a className='header__link' href="/">Features</a>
          <a className='header__link' href="/">Blog</a>
          <a className='header__link' href="/">Pricing</a>
          <a className='header__link' href="/">Company</a>
        </nav>
        <button className='header__button prime-button'>Get a demo</button>
      </div>
    </header>
  )
}

