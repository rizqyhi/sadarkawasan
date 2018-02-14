import http from '@/utils/http'

export default {
  getAll (params = {}) {
    return http.get('/locations', {params})
  }
}
