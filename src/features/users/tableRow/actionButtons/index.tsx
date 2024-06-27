import * as S from './styles'

type Props = {
  onEdit: () => void
  onDelete: () => void
  loading: boolean
}

export const ActionButtons = ({ loading, onDelete, onEdit }: Props) => {
  return (
    <S.ActionsContainer>
      <S.Button onClick={onEdit} shape='default' size='middle'>
        <S.EditIcon size={14} />
        <S.ActionText>Editar</S.ActionText>
      </S.Button>
      <S.Button
        danger={true}
        loading={loading}
        shape='default'
        size='middle'
        onClick={onDelete}
      >
        <S.DeleteIcon size={14} />
        <S.ActionText>Excluir</S.ActionText>
      </S.Button>
      <S.IconButton onClick={onEdit}>
        <S.EditIcon size={14} />
      </S.IconButton>
      <S.IconButton danger={true} onClick={onDelete} loading={loading}>
        <S.DeleteIcon size={14} />
      </S.IconButton>
    </S.ActionsContainer>
  )
}
