import './App.css';
import UsersInfo from './components/UsersInfo';
import UserAlbum from './components/UserAlbum';
import {useState} from 'react';

function App() {
  const [data, setData] = useState()
  const handleUserClick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then(response => response.json())
      .then(json => { setData(json) })
  }

  return (
      <div className="container">
        <UsersInfo onClick={handleUserClick}/>
        <UserAlbum data={data}/>
        </div>
  );
}

export default App;
