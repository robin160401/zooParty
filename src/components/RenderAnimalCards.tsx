import AnimalCard from "./AnimalCard";
import animals from "../dataBase/data";

function RenderAnimalCards(){
    return (
        <div className="flex flex-wrap justify-around">
            {animals.map((animal) =>(
                <AnimalCard 
                key={animal.name}
                name={animal.name}
                species={animal.species}
                habitat={animal.habitat}
                lifespan={animal.lifespan}
                diet={animal.diet}
                funFacts={animal.funFacts}
                emoji = {animal.emoji}
                />
            ))}
        </div>
    )
}

export default RenderAnimalCards;