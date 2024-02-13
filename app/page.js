// импортируем всё что нам нужно
import {Banner} from "./Components/Banner/Banner"
import {Promo} from "./Components/Promo/Promo";
import { CardsList } from "./Components/CardsList/CardsList";
import { PopularCardsFragment } from "./Components/CardsList/PopularCardsFragment";
import { NewCardFragment } from "./Components/CardsList/NewCardFragment";
import Styles from './page.module.css'

export default function Home() {
  return (
        <main className={Styles["main"]}>
          <Banner/>
          <CardsList id='popular' title='Популярные'>
            <PopularCardsFragment />
          </CardsList>
          <CardsList id='new' title='Новые'>
            <NewCardFragment />
          </CardsList>
          <Promo/>
        </main>
  )
}