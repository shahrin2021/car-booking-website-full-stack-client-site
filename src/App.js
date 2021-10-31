import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Pages/Sheard/Header/Header';
import Home from './Components/Pages/Home/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Services from './Components/Pages/Home/Services/Services';
import Login from './Components/Pages/Login/Login';
import AuthProvider from './Components/Pages/Context/AuthProvider';
import AddService from './Components/Pages/AddService/AddService';
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import OrderReview from './Components/Pages/OrderReview/OrderReview';
import MannageOrder from './Components/Pages/MannageOrder/MannageOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
    
      <Switch>
      <Route exact path='/'>
      <Home></Home>
      </Route>
      <Route exact path='/home'>
      <Home></Home>
      </Route>
      <Route path='/services'>
        <Services></Services>
      </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <PrivateRoute path='/service/:id'>
      <ServiceDetails></ServiceDetails>
      </PrivateRoute>
      <PrivateRoute path='/addservice'>
      <AddService></AddService>
      </PrivateRoute>
      <PrivateRoute path='/myorder'>
       <OrderReview></OrderReview>
      </PrivateRoute>
      <PrivateRoute path='/mannageorder'>
       <MannageOrder></MannageOrder>
      </PrivateRoute>
      {/*
      <Route path='/servicesDetails'>
       <ServicesDetails></ServicesDetails>
      </Route> */}


      </Switch>
      
      
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
