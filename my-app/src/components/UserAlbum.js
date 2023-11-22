import React, {useState} from 'react';
import '../App.css';


function UserAlbum( {data} ) {
  let e
    if (data != null) {
      let b = []
      data.forEach (item => {
        let c = []
        c.push(<h1>{item.id}</h1>)
        c.push(<p>{item.title}</p>)
        b.push(<div className="album">{c}</div>)
      })
      e = <div className="user-albums">{b}</div>
      return e
    }
    e = <div className='user-albums'><p></p></div>

    return e

}

export default UserAlbum;