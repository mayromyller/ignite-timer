import { Play } from 'phosphor-react'

import { useForm } from 'react-hook-form'

import * as S from './style'

export function Home() {
  const { register, handleSubmit } = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  return (
    <S.Container>
      <S.Form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.InputTask
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <S.InputMinutes
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

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
