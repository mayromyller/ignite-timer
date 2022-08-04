import { createContext, useState, ReactNode, useReducer } from 'react'
import {
  actionCreteNewCycle,
  actionInterruptCycle,
  actionMarkCurrentCycleAsFinished
} from '../reducers/cycles/action'

import { Cycle, cyclesReducer } from '../reducers/cycles/recuder'

interface CreateCycle {
  task: string
  minutesAmount: number
}

interface CyclesContextTypes {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  secondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycle) => void
  interruptCycle: () => void
}

interface Props {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextTypes)

export function CyclesContextProvider({ children }: Props) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null
  })

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function secondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: CreateCycle) {
    const id = crypto.randomUUID()

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatch(actionCreteNewCycle(newCycle))

    setAmountSecondsPassed(0)
  }

  function interruptCycle() {
    dispatch(actionInterruptCycle())
  }

  function markCurrentCycleAsFinished() {
    dispatch(actionMarkCurrentCycleAsFinished())
  }

  return (
    <CyclesContext.Provider
      value={{
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        interruptCycle,
        createNewCycle,
        secondsPassed,
        activeCycle,
        cycles
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
