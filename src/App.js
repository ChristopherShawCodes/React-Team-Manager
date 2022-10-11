import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';


function App() {
  return (
    <div className='background'>
      <div>
        <Header/>
        <Employees/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
