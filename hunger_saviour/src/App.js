import './App.css';
import Login from './components/login';
import Sign_up from './components/sing_up';
import Homepage_1 from './homepage/homepage_1';
import AllRoutes from './Routes/AllRoutes';

function App() {
  document.title="Hunger Saviour: Freshly Cooked, Never Stored";
  return (
    <div className="App">
      {/* <Homepage_1 /> */}
      {/* <Login /> */}
      {/* <Sign_up /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
