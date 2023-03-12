import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App" >
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
