import './styles.scss';
import {ReactComponent as LogoLink} from '../../assets/images/logoHeader.svg';

export const Header = () => {
  return(
    <header className='header'>
    <div className='header__container container'>
      <a href="/" className="header__logo">
        <LogoLink/>
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


// export const Header = () => (
//   <header className='header'>
//     <div className='container'>
//       {/* <img src={logo} alt="logo" /> */}
//       <img 
//       className='logo-pic'
//         // style={{display:'none'}}
//         alt='pic'
//         src={process.env.PUBLIC_URL+'logoHeader.svg'}/>
//        <div className='wrapper'>
//         <nav className='navigator'>
//           <a className='header-link' href="/">Features</a>
//           <a className='header-link' href="/">Blog</a>
//           <a href="/">Pricing</a>
//           <a className='header-link' href="/">Company</a>
//         </nav>

//         <button className='prime-button'>Get a demo</button>
//       </div>
//     </div>
//   </header>
// )
