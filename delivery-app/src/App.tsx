import { BrowserRouter} from "react-router-dom";
import {MainRouter} from "./Routes";

function App() {
    return (
        <BrowserRouter basename="/BMSTU_IU5_53B_rip_frontend">
            <MainRouter />
        </BrowserRouter>
    );
}

export default App;