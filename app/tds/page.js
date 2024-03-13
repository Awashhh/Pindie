import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utilits";

export default async function Tds() {
    const tdsGames = await getNormalizedGamesDataByCategory(endpoints.games, 'TDS');
    
    return(
        <main className={'main-inner'}>
            <CardsList id = 'tds' title = 'TDS' data={tdsGames}/>
        </main>
    )
}