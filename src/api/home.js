/**
 * Created by zhouxiangbo on 2018/4/25 0025.
 * description:
 */
import axios from 'axios'
import {dataHostUrl} from './config.js'
//获取首页数据
export function getHomeData(uuid,token,channelid,province,city,area) {
  const url = dataHostUrl + "/index/getUserInfo";
  let param = {
    userId:uuid,
    coinType:0,
    token:token,
    channelId:channelid,
    province:province,
    city:city,
    area:area
  }
  return axios.get(url, {params: param}).then((res) => {
    return Promise.resolve(res.data)
  })
}
