import { Play } from 'phosphor-react'

import * as S from './style'

export function Home() {
  return (
    <S.Container>
      <S.Form action="">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos</span>
        </S.FormContainer>

        <S.CountDownContainer>
          <span>0</span>
          <span>0</span>
          <S.Dots>:</S.Dots>
          <span>0</span>
          <span>0</span>
        </S.CountDownContainer>

        <S.Button type="submit">
          <Play size={24} />
          Começar
        </S.Button>
      </S.Form>
    </S.Container>
  )
}
