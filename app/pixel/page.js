import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardsList";

export default function Pixel() {
    const pixelGames = getGamesByCategory('pixel');
    
    return(
        <main className={'main-inner'}>
            <CardsList id = 'pixel' title = 'Pixel Games' data={pixelGames}/>
        </main>
    )
}