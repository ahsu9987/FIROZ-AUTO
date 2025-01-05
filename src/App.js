import './App.css';
import '../src/Allcssfile/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import AllCollection from './Pages/AllCollection';


function App() {
  return (
<>
<Header/>
<HomePage/>
<AllCollection/>
<Footer/>
</>
  );
}

export default App;
