import { Meta, StoryFn } from '@storybook/react'
import { Mycomponents, MycomponentsProps } from '.'

export default {
  title: 'Components/Mycomponents',
  component: Mycomponents
} as Meta

export const Default: StoryFn<MycomponentsProps> = () => <Mycomponents />
