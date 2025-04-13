import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/experimental-addon-test'],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../public']
}
export default config
