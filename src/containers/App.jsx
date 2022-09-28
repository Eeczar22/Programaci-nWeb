import Foother from "../components/Foother.jsx";
import '../assets/styles/App.css'
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";

 function App() {

    
     return(
        <div className="contenedor-padre">
          <Header/>
          <div className="contenedor-hijo">
                <Main/>
          </div>
          <Foother/>
        </div>      
     );

 }


export default App;