import {Switch, Route} from "react-router-dom";
import Movie from "../Movies/Movie";
import Movies from "../Movies/Movies";
import Search from "../Search/Search";
import TvShow from "../TvShows/TvShow";
import TvShows from "../TvShows/TvShows";
import Navigation from "../components/Navigation/Navigation";
import "./App.scss";
import { useEffect } from "react";


const App = () => {
    useEffect(() => {
        document.title = "movieDB";
    }, []);
    return(
        <div>
            <Navigation/>
            <main>
                <Switch>
                    <Route path="/" component={Movies} exact/>
                    <Route path="/movies" component={Movies} exact/>
                    <Route path="/tv-shows" component={TvShows} exact/>
                    <Route path="/movies/:id" component={Movie} exact/>
                    <Route path="/tv-shows/:id" component={TvShow} exact/>
                    <Route path="/search" component={Search} exact/>
                </Switch>
            </main>
            
        </div>
    );
}

export default App;