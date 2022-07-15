/*
 * @Author: 王荣
 * @Date: 2022-07-14 20:17:45
 * @LastEditors: 王荣
 * @LastEditTime: 2022-07-14 20:22:29
 * @Description: 填写简介
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resovlers'

export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver()]
        })
    ]
})