import { ReactElement } from 'react'
import { redirect } from 'next/navigation'

const Index = (): ReactElement => {
  return redirect('/home')
}

export default Index
