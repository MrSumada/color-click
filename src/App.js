import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import Nav from './components/Nav';

function App() {
  return (
    
      <Router basename="/">
        <Nav/>
        <Routes>
          <Route exact path='/' element={<CardList num={5}/>}/>
          <Route exact path='/1' element={<CardList num={1}/>}/>
          <Route exact path='/9' element={<CardList num={3}/>}/>
          <Route exact path='/25' element={<CardList num={5}/>}/>
          <Route exact path='/100' element={<CardList num={10}/>}/>
          <Route exact path='/400' element={<CardList num={20}/>}/>
          <Route exact path='/1024' element={<CardList num={32}/>}/>
        </Routes>
        
      </Router>
  );
}

export default App;
