import * as S from './style'

export function History() {
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
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 dias</td>
              <td>
                <S.Status statusType="green">Concluído</S.Status>
              </td>
            </tr>
          </tbody>
        </table>
      </S.List>
    </S.Container>
  )
}
