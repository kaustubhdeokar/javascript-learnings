import './App.css'

import Exports from './Exports';
import { NamedExport, NamedExport2 } from './Exports';

function Profile(){
  return (
    <img 
     src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  )
}

function Gallery(){
   return (
    <section>
      <Exports/>
      <NamedExport/>
      <NamedExport2/>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );  
}


function App() {
  return (
    <>
      <Gallery/>
    </>
  )
}

export default App;