import { useContext } from 'react'

import { HandPalm, Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import * as zod from 'zod'

import { NewCycleForm } from './components/NewCyclesForm'
import { Countdown } from './components/Countdown'

import { CyclesContext } from '../../contexts/CycleContext'

import * as S from './style'

const schemaValidate = zod.object({
  task: zod.string().min(1, 'Informe a tarefa.'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
})

type NewCycle = zod.infer<typeof schemaValidate>

export function Home() {
  const { createNewCycle, interruptCycle, activeCycle } =
    useContext(CyclesContext)

  const instanceHookForm = useForm<NewCycle>({
    resolver: zodResolver(schemaValidate),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, reset } = instanceHookForm

  function handleCreateNewCycle(data: NewCycle) {
    createNewCycle(data)
    reset()
  }

  return (
    <S.Container>
      <S.Form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...instanceHookForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <S.StopButton type="button" onClick={interruptCycle}>
            <HandPalm size={24} />
            Interromper
          </S.StopButton>
        ) : (
          <S.Button type="submit">
            <Play size={24} />
            Começar
          </S.Button>
        )}
      </S.Form>
    </S.Container>
  )
}
