// импортируем компоненты
import { Banner } from './Components/Banner/Banner';
import { Promo } from './Components/Promo/Promo';
import { CardsList } from './Components/CardsList/CardsList';
// импортируем стили
import Styles from './page.module.css';
// импортируем данные
import { getNormalizedGamesDataByCategory } from './api/api-utilits'
import { endpoints } from './api/config';

export default async function Home() {
	const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, 'popular')
	const newGames = await getNormalizedGamesDataByCategory(endpoints.games, 'new')

	return (
		<main className={Styles['main']}>
			<Banner />
			<CardsList id='popular' title='Популярные' data={popularGames} />
			<CardsList id='new' title='Новые' data={newGames} />
			<Promo />
		</main>
	);
}
