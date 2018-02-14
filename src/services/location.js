import http from '@/utils/http'

export default {
  getAll () {
    return http.get('/locations')
  }
}
