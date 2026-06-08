import request from '@/utils/request'

export function getContestantList(params: any) {
  return request({
    url: '/contestants',
    method: 'get',
    params
  })
}

export function getContestantDetail(id: number | string) {
  return request({
    url: `/contestants/${id}`,
    method: 'get'
  })
}