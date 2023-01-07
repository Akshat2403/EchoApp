import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signin';
import Search from './Components/Search/Search';
import Upload from './Components/Upload/Upload';

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Switch>
                        {/* <Route exact path="/">
        <Home />
        </Route> */}
                        <Route path="/Login">
                            <Login />
                        </Route>
                        <Route path="/Signup">
                            <Signup />
                        </Route>
                        <Route path="/Search">
                            <Search />
                        </Route>
                        <Route path="/Upload">
                            <Upload />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
