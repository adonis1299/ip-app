import {
  ANALYTICS_URL,
  GOV_PROPOSAL_VOTE_CAST_EVENTS,
} from '../../../constants'
import axios from 'axios'

export interface ProposalVoteCastEvent {
  Block: number
  Transaction: string
  TransactionIndex: number
  Voter: string
  ProposalId: number
  Support: number
  Votes: number
  Reason: string
}

const getProposalVoteCastEvents = async () => {
  try {
    const proposalsUrl = `${ANALYTICS_URL}${GOV_PROPOSAL_VOTE_CAST_EVENTS}`

    const response = await axios.get(proposalsUrl)
    return response.data as ProposalVoteCastEvent[]
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export default getProposalVoteCastEvents
