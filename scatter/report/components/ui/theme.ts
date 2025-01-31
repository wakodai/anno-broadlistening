import {createSystem, defaultConfig, defineConfig} from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: 'gray'
    },
  },
})

export const system = createSystem(defaultConfig, config)
