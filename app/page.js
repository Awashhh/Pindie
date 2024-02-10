import {Banner} from "./Components/Banner/Banner"
import {Promo} from "./Components/Promo/Promo";
import {PopularCardsList} from "./Components/CardsList/PopularCardsList"
import {NewCardList} from "./Components/CardsList/NewCardsList"
export default function Home() {
  return (
        <main className="main">
          <Banner/>
          <PopularCardsList/>
          <NewCardList/>
          <Promo/>
        </main>
)}