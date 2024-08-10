import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login/login.jsx';
import Aboutus from './component/page/About Us/aboutus.jsx';
import Packege from './component/page/Packege/packege.jsx';
import Services from './component/page/Services/services.jsx';
import Signin from './component/page/Sign In/signin.jsx';
import Tours from './component/page/Tour’s/tours.jsx';
import Nav from './component/page/nav/nav.jsx';
import Aos from "aos"
import Gallereya from "./component/page/galereya/gallereya.jsx";
const App = () => {
	useEffect(() => {
		Aos.init()

	})
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<Tours />} />
				<Route path='/about' element={<Aboutus />} />
				<Route path='/packege' element={<Packege />} />
				<Route path='/services' element={<Services />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/galer' element={<Gallereya/>} />
			</Routes>
		</div>
	);
};

export default App;
