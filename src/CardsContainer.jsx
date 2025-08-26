


import "./CardsContainer.css";
import Cards from "./Cards";

function CardsContainer(){
    return(
        <main>
            <h2>Cards Section</h2>
            <div id="cardContainer">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </main>
    );
}

export default CardsContainer;