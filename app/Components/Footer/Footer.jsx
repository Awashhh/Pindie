import Styles from "./Footer.module.css"

export const Footer = () =>{
  return(
    <footer className={Styles['footer']}>
    <a href="./index.html" className={Styles['logo']}>
     <span className={Styles['logo-name']}>pindie</span>
     <span className={Styles['logo-copy']}>, XXI век</span>
    </a>
    <ul className={Styles['social-list']}>
      <li className={Styles['social-list__item']}>
        <a href="" className={Styles['social-list__link']}>YT</a>
      </li>
      <li className={Styles['social-list__item']}>
        <a href="" className={Styles['social-list__link']}>ВК</a>
      </li>
      <li className={Styles['social-list__item']}>
        <a href="" className={Styles['social-list__link']}>TG</a>
      </li>
    </ul>
  </footer>
  )
}