// импортируем компоненты
import { Banner } from './Components/Banner/Banner';
import { Promo } from './Components/Promo/Promo';
import { CardsList, CardsListSection } from './Components/CardsListSection/CardsListSection';
import Styles from './page.module.css'
// импортируем стили
// импортируем данные
import { getNormalizedGamesDataByCategory } from './api/api-utilits'
import { endpoints } from './api/config';

export default async function Home() {
	const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, 'popular')
	const newGames = await getNormalizedGamesDataByCategory(endpoints.games, 'new')

	return (
		<main className='main'>
			<Banner />
			<CardsListSection id='popular' title='Популярные' data={popularGames} type='slider' />
			<CardsListSection id='new' title='Новые' data={newGames} type='slider'  />
			<Promo />
		</main>
	)
}
