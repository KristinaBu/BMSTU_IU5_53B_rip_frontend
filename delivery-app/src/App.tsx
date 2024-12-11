import { BrowserRouter} from "react-router-dom";
import {MainRouter} from "./Routes";
import {Provider} from "react-redux";
import {store} from "./core/store";

function App() {
    return (
        <BrowserRouter basename="/BMSTU_IU5_53B_rip_frontend">
            <Provider store={store}>
            <MainRouter />
            </Provider>
        </BrowserRouter>
    );
}

export default App;