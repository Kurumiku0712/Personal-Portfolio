import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience"
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Home />
                <Skills />
                <WorkExperience />
                <ContactMe />
            </div>
            <Footer />
        </>
    );
}

export default App;
