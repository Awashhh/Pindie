import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../Components/CardsList/CardsList";

export default function Runners(props) {
    const runnersGames = getGamesByCategory('runner');
    return(
        <main className={'main-inner'}>
            <CardsList id = 'runners' title = 'runners' data={runnersGames}/>
        </main>
    )
}