import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import PageNoteFound from './Components/NoteFound/PageNoteFound';
import Service from './Components/Services/Service';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
   <Router>
   <Header></Header>
   <Switch>
     <Route exact path='/'>
    <Home></Home>
     </Route>
    <Route path='/home'>
     <Home></Home>
    </Route>
    <Route path='/service'>
      <Service>
      </Service>
    </Route>
    <Route path='/about'>
      <About></About>
    </Route>
    <Route path='/contact'>
      <Contact></Contact>
    </Route>
    <Route path='*'>
<PageNoteFound></PageNoteFound>
    </Route>
  </Switch>
  <Footer></Footer>
   </Router>
    </div>
  );
}

export default App;
