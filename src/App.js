import logo from './components/yeiz.png';
import './App.css';
import Login from './components/login/login';
import Dashboard from './pages/Dashboard';
import Order from './pages/Order'
import Catalog from './pages/Catalog';
import { data } from '../App';

const App = () => {
  return (
    <div className="App">
      <Dashboard />
      <Order/>
      <Catalog/>
    </div>
  );
};




export default App;
