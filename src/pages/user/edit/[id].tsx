import { useRouter } from 'next/router'

import { useUsersStorage } from '~hooks'
import { PageLayout } from '~layout'
import { maskCpf, maskPhoneNumber } from '~utils'

import { FormCreateOrAlterUser } from 'src/features'
import { NotFoundUser } from 'src/features/notFoundUser'

export default function EditUser() {
  const router = useRouter()
  const { users } = useUsersStorage()

  const userById = users?.find((user) => user.id === router.query.id)

  if (!userById) {
    return <NotFoundUser />
  }

  const defaultValues = {
    name: userById.name,
    cpf: maskCpf(userById.cpf),
    id: userById.id,
    email: userById.email,
    phone: maskPhoneNumber(userById.phone),
  }

  return (
    <PageLayout>
      <FormCreateOrAlterUser defaultValues={defaultValues} />
    </PageLayout>
  )
}
