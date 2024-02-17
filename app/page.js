// импортируем всё что нам нужно
import {Banner} from "./Components/Banner/Banner"
import {Promo} from "./Components/Promo/Promo";
import { CardsList } from "./Components/CardsList/CardsList";
import Styles from './page.module.css';
import {getGamesByCategory} from './data/data-utils';

export default function Home() {
  const popularGames = getGamesByCategory('popular');
	const newGames = getGamesByCategory('new'); 
  return (
        <main className={Styles["main"]}>
          <Banner/>
          <CardsList id="popular" title="Популярные" data = {popularGames}/>
          <CardsList id="new" title="Новые" data = {newGames} />
          <Promo/>
        </main>
  );
};