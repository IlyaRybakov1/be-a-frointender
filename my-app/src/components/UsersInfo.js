import React, {useState} from 'react';
import '../App.css';


function UsersInfo( {onClick}) {
  const handleUserClick = () => {
    onClick()
  }
  const [data, setData] = useState()
  const [isLoadedData, loadedData] = useState(false)
  let e
    if (data == null) {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => { setData(json) })
    }
    function addEvents() {
      let btns = document.querySelectorAll('.js-click')
      btns.forEach(item => {
          item.addEventListener('click', e => {
              onClick(item.dataset.id)   
          })
      })
    }
    addEvents()
    if (data != null) {
      let b = []
      data.forEach (item => {
        let c = []
        c.push(<h1>{item.id}</h1>)
        c.push(<p>{item.name}</p>)
        c.push(<p>{item.address.street}</p>)
        c.push(<p>{item.company.name}</p>)
        c.push(<p>{item.email}</p>)
        c.push(<p>{item.phone}</p>)
        c.push(<p>{item.website}</p>)
        c.push(<button className="js-click" data-id={item.id}>Дивитись альбоми</button>)
        b.push(<div className="user">{c}</div>)
      })
      e = <div className="users-info">{b}</div>
      return e
    }
  
  e = <div><button onClick={handleUserClick}>Loading...</button></div>
  return e

}

export default UsersInfo;