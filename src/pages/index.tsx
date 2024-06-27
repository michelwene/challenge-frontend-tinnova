import dynamic from 'next/dynamic'

import { PageLayout } from '~layout'

const Users = dynamic(
  () => import('src/features/users').then((component) => component.Users),
  { ssr: false },
)

export default function Home() {
  return (
    <>
      <PageLayout>
        <Users />
      </PageLayout>
    </>
  )
}
