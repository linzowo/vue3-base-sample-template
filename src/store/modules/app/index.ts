import { defineStore } from 'pinia'
import piniaStore from '@/store/index'
import { AppState } from './types'

export const useAppStore = defineStore(
  // 唯一ID
  'app',
  {
    state: () => ({}),
    getters: {},
    actions: {
      // Update app settings
      updateSettings(partial: Partial<AppState>) {
        // @ts-ignore-next-line
        this.$patch(partial)
      },
    },
  },
)

export function useAppOutsideStore() {
  return useAppStore(piniaStore)
}
