import SideBar from "./components/sideBar/sideBar";
import LaunchCard from "./components/LaunchCard/launchCard";
import Rocket from "./components/Rocket/rocket";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="components">
                <BrowserRouter>
                <SideBar />
                    <Routes>
                        <Route path="/rockets" element={<LaunchCard />} />
                        <Route path="/" element={<Rocket />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
