import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardsList";

export default function Shooters() {
    const shootersGames = getGamesByCategory('shooter');
    
    return(
        <main className={'main-inner'}>
            <CardsList id = 'shooters' title = 'Shooters' data={shootersGames}/>
        </main>
    )
}