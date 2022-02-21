import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Feed } from "./components/Feed/Feed";

const App = () => {
	return (
		<div>
			<Navbar />
			<div className="app-home">
				<Feed />
			</div>
		</div>
	);
};

export default App;
