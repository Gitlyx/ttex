import './App.css';
import { Rating } from './components/Rating/Rating';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={'https://cdn-icons-png.flaticon.com/512/3183/3183463.png'}
          className='App-logo'
          alt='logo'
          style={{ width: '20%', height: '20%' }}
        />
        <h2>Give us feedback!</h2>
        <Rating/>
      </header>
    </div>
  );
}

export default App;
