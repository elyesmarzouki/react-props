import './App.css';
import React from 'react';
import Profile from './Profile/profileComponent';
import myImage from './imageeInSrc.jpg'

function App(){
  return(
    <Profile fullName="Elyes Marzouki" profession="developpeur" bio="j'aime tout truc qui nécessite de la créativité.">
      <img src={myImage} alt="props.children"/>
    </Profile>
  );
}

export default App;
