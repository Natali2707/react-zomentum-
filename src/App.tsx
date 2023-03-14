import React from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Offer } from './components/Offer/Offer'

export const App = () => (
  <div>
    <div ><Header /></div>
    <div>  <Hero /></div>
    <div> <Offer /></div>
  </div>
)





// export const App = () => {
//   return (
//   // <ul>{[1,2,3].map(i=>(<li>{i}</li>))} </ul>
//   <ul>
//     {[{name:"Home"},{name:"About"},{name:"Login"}]
//   .map(({name})=>
//   {  //вот так правильно возвращать , без много (), а ставим {}и в них return
//    return <li>{name}</li>
//    })}
//    </ul>
//   );
//   }


// export const App=()=> {
//   return (
//     <div className="App">
//     <Header/>
//     <Hero/>
//     <Offer/>
//     </div>
//   );
// }

// export default App;


// --save-dev  д сохр-я зависимостей  для продакшн в devDependencies