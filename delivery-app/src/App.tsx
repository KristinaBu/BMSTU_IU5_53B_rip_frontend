import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./core/store";
import {useEffect} from "react";
import { invoke } from "@tauri-apps/api/core";
import {MainRouter} from "./Routes.tsx";


function App() {
    useEffect(()=>{
        invoke('tauri', {cmd:'create'})
            .then(() =>{console.log("Tauri launched")})
            .catch(() =>{console.log("Tauri not launched")})
        return () =>{
            invoke('tauri', {cmd:'close'})
                .then(() =>{console.log("Tauri launched")})
                .catch(() =>{console.log("Tauri not launched")})
        }
    }, [])

    return (
        <BrowserRouter>
            <Provider store={store}>
                <MainRouter/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;