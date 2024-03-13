import { CardsList } from "../Components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utilits";

export default async function Pixel() {
    const pixelGames = await getNormalizedGamesDataByCategory(endpoints.games, 'pixel');
    
    return(
        <main className={'main-inner'}>
            <CardsList id = 'pixel' title = 'Pixel Games' data={pixelGames}/>
        </main>
    )
}