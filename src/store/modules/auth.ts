import { defineStore } from 'pinia'

interface AUTH {
  pin: string
  status: boolean
}

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      pin: '',
      status: false,
    } as AUTH),
  actions: {
    Login(pin: string) {
      this.pin = pin
      this.status = true
      localStorage.setItem('loggedin', 'true')
      window.location.href = '/manages/home'
    },
    Logout() {
      this.pin = ''
      this.status = false
      localStorage.removeItem('loggedin')
      window.location.href = '/login'
    },
  },
})
