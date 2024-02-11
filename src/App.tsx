import * as ROUTES from './constants/Routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Browse, SignUp, SignIn, Registration } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}></Route>
        <Route path={ROUTES.BROWSER} element={<Browse />}></Route>
        <Route path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
        <Route path={ROUTES.REGISTRATION} element={<Registration />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
