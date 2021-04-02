import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { MovieProvider } from './MovieContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <MovieProvider>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <MovieList />
            </Route>
            <Route path='/create'>
              <AddMovie />
            </Route>
          </Switch>
        </Router>
      </div>
    </MovieProvider>
  );
};

export default App;
