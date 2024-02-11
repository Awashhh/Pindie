import Styles from './CardsList.module.css'
export const NewCardFragment = () =>{
    return (
        <>
        <li className={Styles["cards-list__item"]}>
                <a href="/game-id.html" className={Styles["card-list__link"]}>
                  <article className={Styles["card"]}>
                    <img
                      src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
                      alt=""
                      className={Styles["image"]}
                    />
                    <div className={Styles["content-block"]}>
                      <h3 className={Styles["title"]}>Go Away</h3>
                      <p className={Styles["description"]}>
                        Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню.
                      </p>
                      <div className={Styles["info-container"]}>
                        <p className={Styles["author"]}>
                          Автор: <span className={Styles["accent"]}>Mahisto</span>
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
                      src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
                      alt=""
                      className={Styles["image"]}
                    />
                    <div className={Styles["content-block"]}>
                      <h3 className={Styles["title"]}>G.U.N.N.E.R.</h3>
                      <p className={Styles["description"]}>
                        Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше.
                      </p>
                      <div className={Styles["info-container"]}>
                        <p className={Styles["author"]}>
                          Автор: <span className={Styles["accent"]}>IDKWIAm</span>
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
                      src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
                      alt=""
                      className={Styles["image"]}
                    />
                    <div className={Styles["content-block"]}>
                      <h3 className={Styles["title"]}>Space Terror</h3>
                      <p className={Styles["description"]}>
                        Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути.
                      </p>
                      <div className={Styles["info-container"]}>
                        <p className={Styles["author"]}>
                          Автор: <span className={Styles["accent"]}>IDKWIAm</span>
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
                      src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
                      alt=""
                      className={Styles["image"]}
                    />
                    <div className={Styles["content-block"]}>
                      <h3 className={Styles["title"]}>Square Slayer</h3>
                      <p className={Styles["description"]}>
                        Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень.
                      </p>
                      <div className={Styles["info-container"]}>
                        <p className={Styles["author"]}>
                          Автор: <span className={Styles["accent"]}>niclan</span>
                        </p>
                        <p className={Styles["votes"]}>
                          Голосов на сайте: <span className={Styles["accent"]}>10</span>
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </li></>
    )
}