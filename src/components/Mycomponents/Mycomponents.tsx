import { FC } from 'react'

export type MycomponentsProps = {
  title?: string
}

export const Mycomponents: FC<MycomponentsProps> = ({
  title = 'Mycomponents'
}) => {
  return (
    <div>
      <h1 className="text-4xl font-bold underline">{title}</h1>
    </div>
  )
}
