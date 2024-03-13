import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utilits";

export default async function Shooters() {
    const shootersGames = await getNormalizedGamesDataByCategory(endpoints.games, 'shooter');
    
    return(
        <main className={'main-inner'}>
            <CardsList id = 'shooters' title = 'Shooters' data={shootersGames}/>
        </main>
    )
}