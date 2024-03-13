import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utilits";

export default async function New() {
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, 'new');
    
    return(
        <main className={'main-inner'}>
            <CardsList id = 'new' title = 'Новинки' data={newGames}/>
        </main>
    )
}