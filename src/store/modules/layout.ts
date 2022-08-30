import { defineStore } from 'pinia'

interface LAYOUT {
  asideToggleStatus: boolean
}

export const useLayoutStore = defineStore('layout', {
  state: () =>
    ({
      asideToggleStatus: true,
    } as LAYOUT),
  actions: {
    asideToggle(payload: boolean) {
      this.$state.asideToggleStatus = payload
    },
  },
})
