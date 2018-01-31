import { getInfo, getAddressList } from '../service/getData.js'
import { GET_USERINFO, SAVE_ADDRESS } from './mutation-types.js'
import {getStore} from '../config/utils.js'

export default {
  async getUserInfo ({
    commit,
    state
  }) {
    let res = await getInfo({
      user_id: getStore('user_id')
    })
    commit(GET_USERINFO, res.data)
  },
  async saveAddress ({
    commit,
    state
  }) {
    if (state.removeAddress.length > 0) return
    let addres = await getAddressList({
      user_id: state.userInfo.user_id
    })
    commit(SAVE_ADDRESS, addres.data)
  }
}
