import { getInfo } from '../service/getData.js'
import { GET_USERINFO } from './mutation-types.js'

export default {
  async getUserInfo ({
    commit,
    state
  }) {
    let res = await getInfo()
    commit(GET_USERINFO, res)
  }
}
