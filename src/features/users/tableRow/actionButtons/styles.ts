import styled from 'styled-components'

import {
  DeleteIcon as ICONSDeleteIcon,
  EditIcon as ICONSEditIcon,
} from '~icons'
import { Button as UIButton, IconButton as UIIconButton } from '~ui'

export const ActionsContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

export const ActionText = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
`

export const DeleteIcon = styled(ICONSDeleteIcon)`
  flex-shrink: 0;
`

export const EditIcon = styled(ICONSEditIcon)`
  flex-shrink: 0;
`

export const Button = styled(UIButton)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`

export const IconButton = styled(UIIconButton)`
  @media (max-width: 768px) {
    display: none;
  }
`
