'use client';
import Styles from "./Footer.module.css"
import Link from 'next/link';
import { usePathname } from "next/navigation";

export const Footer = () =>{
  const pathname = usePathname();
  return(
    <footer className={Styles['footer']}>
    <div> {pathname === '/' ? 
      <div className={Styles['logo']}>
        <span className={Styles['logo-name']}>pindie</span>
        <span className={Styles['logo-copy']}>, XXI век</span>
      </div>:
        <Link href="/" className={Styles['logo']}>
        <span className={Styles['logo-name']}>pindie</span>
        <span className={Styles['logo-copy']}>, XXI век</span>
        </Link>
      }
    </div>
    <ul className={Styles['social-list']}>
      <li className={Styles['social-list__item']}>
        <Link href="https://www.youtube.com/@yandex" className={Styles['social-list__link']}>YT</Link>
      </li>
      <li className={Styles['social-list__item']}>
        <Link href="https://vk.com/yandex" className={Styles['social-list__link']}>ВК</Link>
      </li>
      <li className={Styles['social-list__item']}>
        <Link href="https://t.me/s/yandex" className={Styles['social-list__link']}>TG</Link>
      </li>
    </ul>
  </footer>
  )
}