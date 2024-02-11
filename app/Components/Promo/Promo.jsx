import Styles from './Promo.module.css'
export const Promo = () =>{
    return(
        <section className={Styles['promo']}>
            <div className={Styles['description-block']}>
              <h2 className={Styles['title']}>Твой промо-код</h2>
              <p className={Styles['description']}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
              <button className={Styles['button']}>Получить код</button>
            </div>
            <img src="./images/promo-illustration.svg" alt="Собака" className={Styles['image']}/>
          </section>
    )
}