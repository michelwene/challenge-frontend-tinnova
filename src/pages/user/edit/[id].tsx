import { useRouter } from 'next/router'

import { useUsersStorage } from '~hooks'
import { PageLayout } from '~layout'
import { maskCpf, maskPhoneNumber } from '~utils'

import { FormCreateOrAlterUser } from 'src/features'

export default function EditUser() {
  const router = useRouter()
  const { users } = useUsersStorage()

  const userById = users.find((user) => user.id === router.query.id)

  return (
    <PageLayout>
      <FormCreateOrAlterUser
        defaultValues={{
          name: userById?.name || '',
          cpf: maskCpf(userById?.cpf || '') ?? '',
          id: userById?.id || '',
          email: userById?.email || '',
          phone: maskPhoneNumber(userById?.phone || '') ?? '',
        }}
      />
    </PageLayout>
  )
}
