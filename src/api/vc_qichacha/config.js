let url = '/api'

if (process.env.NODE_ENV === 'production') { url = 'http://erp.api.newairtek.com/api' }

// module.exports = {
//   baseUrl: url
// }

export let baseUrl = url
