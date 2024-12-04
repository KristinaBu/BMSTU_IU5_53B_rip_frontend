import { BrowserRouter} from "react-router-dom";
import {MainRouter} from "./Routes";

function App() {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
}

export default App;