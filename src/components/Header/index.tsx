import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo.svg'

import * as S from './style'

export function Header() {
  return (
    <S.Container>
      <img src={Logo} alt="" />
      <S.Navbar>
        <NavLink to="">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </S.Navbar>
    </S.Container>
  )
}
