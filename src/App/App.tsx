import {Switch, Route} from "react-router-dom";
import Movies from "../Movies/Movies";
import Search from "../Search/Search";
import TvShows from "../TvShows/TvShows";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import "./App.scss";
import { useEffect } from "react";
import Movie from "../Movies/Movie";
import TvShow from "../TvShows/TvShow";


const App = () => {
    
    useEffect(() => {
        document.title = "movieDB";
    }, []);
    return(
        <div>
            <Navigation/>
                <main className="container">
                    <Switch>
                        <Route path="/" component={Movies} exact/>
                        <Route path="/movies" component={Movies} exact/>
                        <Route path="/movies/:id" component={Movie} exact/>
                        <Route path="/tv-shows" component={TvShows} exact/>
                        <Route path="/tv-shows/:id" component={TvShow} exact/>
                        <Route path="/search" component={Search} exact/>
                    </Switch>
                </main>
            <Footer/>
        </div>
    );
}

export default App;