import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardsList";

export default function Popular() {
    const popularGames = getGamesByCategory('popular');
    
    return(
        <main className={'main-inner'}>
            <CardsList id = 'popular' title = 'popular' data={popularGames}/>
        </main>
    )
}