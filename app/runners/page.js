import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utilits";

export default async function Runners(props) {
    const runnersGames = await getNormalizedGamesDataByCategory(endpoints.games, 'runner');
    return(
        <main className={'main-inner'}>
            <CardsList id = 'runners' title = 'runners' data={runnersGames}/>
        </main>
    )
}