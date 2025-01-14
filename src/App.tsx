import CustomerFeedback from "./sections/niceCustomerFeedback";
import UserInfo from "./sections/userInfo";
import Services from "./sections/services";
import Welcome from "./sections/welcome";
import Contact from "./sections/contact";
import Process from "./sections/aboutTheProcess";

import Nav from "./components/Nav"

const App = () => (
  <main className='relative flex flex-col w-full'>
  <Nav />
    <section id="home" className=''>
      <Welcome/>
    </section>
    <section className="bg-pale-blue">
    <CustomerFeedback/>
    </section>
    <section id="leave-info" className=" sm:py-32 ">
      <UserInfo/>
    </section>
    <section className="bg-pale-blue">
      <Process/>
    </section>
    <section id="services" className="bg-white padding-t pb-8">
      <Services/>
    </section>
    <section id="contact-us" className="bg-pale-blue">
      <Contact/>
    </section>

  </main>
);

export default App;


