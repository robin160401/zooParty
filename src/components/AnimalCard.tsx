interface AnimalProps {
    name: string;
    species: string;
    habitat: string;
    lifespan: number;
    diet: string;
    funFacts: string[];
    emoji: string;
}

function AnimalCard(props: AnimalProps){
    return(
        <div className="w-96 border-2 items-center m-8 text-white">
            <div className="text-9xl text-center">{props.emoji}</div>
            <div className="text-2xl text-center">{props.name}</div>
            <div className="text-l text-center">{props.species}</div>
            <div className="text-l text-center">{props.habitat}</div>
            <div className="text-l text-center">{props.diet}</div>
            <div className="text-l text-center">{props.lifespan} years^ Lifespan</div>
            <ul className="list-disc ml-8">{props.funFacts.map((fact) => (
                <li>{fact}</li>
            ))}</ul>
        </div>
    )
}

export default AnimalCard;