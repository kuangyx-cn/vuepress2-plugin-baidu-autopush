import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export const baiduAutopush = (): Plugin => ({
  name: 'vuepress2-plugin-baidu-autopush',
  clientConfigFile: path.resolve(__dirname, './client.ts'),
})