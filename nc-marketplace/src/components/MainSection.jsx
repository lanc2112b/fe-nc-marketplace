import ItemList from "./ItemList";
import AddItem from "./AddItem"
import {BrowserRouter, Routes, Route} from "react-router-dom"




const MainSection = () => {
    return(
        <BrowserRouter>
        <main>
        <ItemList/>
        <AddItem/>
        </main>
        </BrowserRouter>
    )
}


export default MainSection;