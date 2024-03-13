import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utilits";

export default async function Popular() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, 'popular');
    
    return(
        <main className={'main-inner'}>
            <CardsList id = 'popular' title = 'popular' data={popularGames}/>
        </main>
    )
}