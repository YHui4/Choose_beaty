import request from '@/utils/request'

export function voteForContestant(contestantId: number | string) {
  return request({
    url: '/votes',
    method: 'post',
    data: {
      contestantId
    }
  })
}