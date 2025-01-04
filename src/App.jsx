import React, { Suspense, lazy } from "react";
import { Oval } from "react-loader-spinner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link, Element } from "react-scroll"; // Import from react-scroll

// Lazy load the sections
const Home = lazy(() => import("./components/Home"));
const Services = lazy(() => import("./components/Services"));
const Project = lazy(() => import("./components/Project"));
const ContactForm = lazy(() => import("./components/ContactForm"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <Oval
            height={80}
            width={80}
            color="#261bc2"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#261bc2"
            strokeWidth={2}
            strokeWidthSecondary={1}
          />
        </div>
      }
    >
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Sections with react-scroll Elements */}
        <Element name="home">
          <Home />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="projects">
          <Project />
        </Element>
        <Element name="contact">
          <ContactForm />
        </Element>

        {/* Footer */}
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
