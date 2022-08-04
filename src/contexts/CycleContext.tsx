import { createContext, useState, ReactNode } from 'react'

interface CreateCycle {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
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
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [cycles, setCycles] = useState<Cycle[]>([])

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

    setCycles((prevState) => [...prevState, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    // reset()
  }

  function interruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          console.log({ ...cycle, interruptedDate: new Date() })
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      })
    )

    setActiveCycleId(null)
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      })
    )
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
