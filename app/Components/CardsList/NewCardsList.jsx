import Styles from './CardsList.module.css'
import { NewCardFragment } from './NewCardFragment'
export const NewCardList =()=>{
    return (
        <section className={Styles["list-section"]}>
            <h2 className={Styles['list-section__title']} id="new">
              Новинки
            </h2>
            <ul className={Styles['cards-list']}>
              <NewCardFragment/>
            </ul>
          </section>
    )
}