import CustomerFeedback from "./sections/customerFeedback";
import UserInfo from "./sections/userInfo";
import Services from "./sections/services";
import Welcome from "./sections/welcome";
import Contact from "./sections/contact";
import Nav from "./components/Nav"

const App = () => (
  <main className='relative flex-col'>
  <Nav />
    <section id="home" className='xl:padding-l wide:padding-r padding-b'>
      <Welcome/>
    </section>
    <section className="bg-pale-blue padding">
    <CustomerFeedback/>
    </section>
    <section id="leave-info" className="padding-x sm:py-32 w-full">
      <UserInfo/>
    </section>
    <section className="bg-pale-blue padding">
      
    </section>
    <section id="services" className="bg-white padding-x padding-t pb-8">
      <Services/>
    </section>
    <section id="contact-us" className="bg-pale-blue padding">
      <Contact/>
    </section>
  </main>
);

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
