import Styles from './CardsList.module.css'
export const PopularCardsFragment = () =>{
    return(
        <>
        <li className={Styles["cards-list__item"]}>
          <a href="/game-id.html" className={Styles["card-list__link"]}>
            <article className={Styles["card"]}>
              <img
                src="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
                alt=""
                className={Styles["image"]}
              />
              <div className={Styles["content-block"]}>
                <h3 className={Styles["title"]}>Crystal Kepper</h3>
                <p className={Styles["description"]}>
                  Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.
                </p>
                <div className={Styles["info-container"]}>
                  <p className={Styles["author"]}>
                    Автор: <span className={Styles["accent"]}>Lonely Baobab</span>
                  </p>
                  <p className={Styles["votes"]}>
                    Голосов на сайте: <span className={Styles["accent"]}>20</span>
                  </p>
                </div>
              </div>
            </article>
          </a>
        </li>
        <li className={Styles["cards-list__item"]}>
          <a href="/game-id.html" className={Styles["card-list__link"]}>
            <article className={Styles["card"]}>
              <img
                src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
                alt=""
                className={Styles["image"]}
              />
              <div className={Styles["content-block"]}>
                <h3 className={Styles["title"]}>Dangeons'n'Caves. Prologue</h3>
                <p className={Styles["description"]}>
                  Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.
                </p>
                <div className={Styles["info-container"]}>
                  <p className={Styles["author"]}>
                    Автор: <span className={Styles["accent"]}>F-Style</span>
                  </p>
                  <p className={Styles["votes"]}>
                    Голосов на сайте: <span className={Styles["accent"]}>10</span>
                  </p>
                </div>
              </div>
            </article>
          </a>
        </li>
        <li className={Styles["cards-list__item"]}>
          <a href="/game-id.html" className={Styles["card-list__link"]}>
            <article className={Styles["card"]}>
              <img
                src="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
                alt=""
                className={Styles["image"]}
              />
              <div className={Styles["content-block"]}>
                <h3 className={Styles["title"]}>Defence of Crystal</h3>
                <p className={Styles["description"]}>
                  Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.
                </p>
                <div className={Styles["info-container"]}>
                  <p className={Styles["author"]}>
                    Автор: <span className={Styles["accent"]}>MastWe</span>
                  </p>
                  <p className={Styles["votes"]}>
                    Голосов на сайте: <span className={Styles["accent"]}>20</span>
                  </p>
                </div>
              </div>
            </article>
          </a>
        </li>
      </>
    )
}