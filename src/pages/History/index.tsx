import { useContext } from 'react'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { CyclesContext } from '../../contexts/CycleContext'

import * as S from './style'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <S.Container>
      <S.Title>Meu histórico</S.Title>

      <S.List>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <S.Status statusType="green">Concluído</S.Status>
                    )}
                    {cycle.interruptedDate && (
                      <S.Status statusType="red">Interrompido</S.Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <S.Status statusType="yellow">Em andamento</S.Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </S.List>
    </S.Container>
  )
}
