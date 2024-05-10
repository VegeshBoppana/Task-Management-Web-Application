import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
import Kanban from './Kanban';

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signup/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path='/kanban' element={<Kanban/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
