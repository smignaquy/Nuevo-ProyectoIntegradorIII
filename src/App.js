import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './screens/Home/Home' 
import ScreenAlbum from './screens/Detalle/ScreenAlbum'
import ScreenArtista from './screens/Detalle/ScreenArtista'
import ScreenCancion from './screens/Detalle/ScreenCancion'
import ScreenVerTodoArtista from './screens/VerTodo/VerTodoArtista';
import ScreenVerTodoAlbumes from './screens/VerTodo/VerTodoAlbumes';
import ScreenVerTodoCanciones from './screens/VerTodo/VerTodoCanciones';
import NotFound from './screens/NotFound/NotFound';
import ScreenPlaylist from './screens/Playlist/ScreenPlaylist'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/detalle/artista/:id' component={ScreenArtista} />
        <Route path='/detalle/album/:id' component={ScreenAlbum} />
        <Route path='/detalle/cancion/:id' component={ScreenCancion} />
        <Route path='/vertodo/artistas' component={ScreenVerTodoArtista} />
        <Route path='/vertodo/canciones' component={ScreenVerTodoCanciones} />
        <Route path='/vertodo/albumes' component={ScreenVerTodoAlbumes} />
        <Route path='/playlist' component={ScreenPlaylist} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
