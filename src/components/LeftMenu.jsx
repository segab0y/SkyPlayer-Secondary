import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import BurgerMenu from './BurgerMenu'
import BurgerMenuHorizontal from './BurgerMenuHorizontal'

function LeftMenuItems() {
  const [show, setShow] = useState(false)

  return (
    <nav className="main__nav nav w-[244px] bg-[#181818] pt-5 pr-0 pb-5 pl-[36px]">
      <div className="nav__logo logo w-[113.33px] h-[43px] pt-[13px] pr-0 pb-[13px] pl-0 bg-transparent mb-5]">
        <img
          className="logo__image w-[113.33px] h-[17px]"
          src="./assets/logo.png"
          alt="logo"
        />
      </div>
      <div onClick={() => setShow(!show)}>
        {show ? <BurgerMenu /> : <BurgerMenuHorizontal />}
      </div>
      <CSSTransition in={show} timeout={300} classNames="alert" unmountOnExit>
        <div className="nav__menu menu block visible ">
          <ul className="menu__list pt-[18px] pr-0 pb-2.5 pl-0">
            <li className="menu__item pt-[5px] pb-[5px] mb-4">
              <a
                href="http://"
                className="menu__link text-[#FFFFFF] font-normal text-base"
              >
                Главное
              </a>
            </li>
            <li className="menu__item pt-[5px] pb-[5px] mb-4">
              <a
                href="http://"
                className="menu__link text-[#FFFFFF] font-normal text-base"
              >
                Мой плейлист
              </a>
            </li>
            <li className="menu__item pt-[5px] pb-[5px] mb-4">
              <a
                href="http://"
                className="menu__link text-[#FFFFFF] font-normal text-base"
              >
                Войти
              </a>
            </li>
          </ul>
        </div>
      </CSSTransition>
    </nav>
  )
}

export default LeftMenuItems
