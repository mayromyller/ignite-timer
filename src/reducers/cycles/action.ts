import { Cycle } from './recuder'

export enum ActionType {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

export function actionCreteNewCycle(newCycle: Cycle) {
  return {
    type: ActionType.CREATE_NEW_CYCLE,
    payload: {
      newCycle
    }
  }
}

export function actionMarkCurrentCycleAsFinished() {
  return {
    type: ActionType.MARK_CURRENT_CYCLE_AS_FINISHED
  }
}

export function actionInterruptCycle() {
  return {
    type: ActionType.INTERRUPT_CYCLE
  }
}
