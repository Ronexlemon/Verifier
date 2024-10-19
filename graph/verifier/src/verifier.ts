import {
  Approve as ApproveEvent,
  Cancel as CancelEvent,
  Register as RegisterEvent
} from "../generated/Verifier/Verifier"
import { Approve, Cancel, Register } from "../generated/schema"

export function handleApprove(event: ApproveEvent): void {
  let entity = new Approve(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.name = event.params.name
  entity.email = event.params.email
  entity.code = event.params.code
  entity.userPassKey = event.params.userPassKey
  entity.isApprove = event.params.isApprove

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancel(event: CancelEvent): void {
  let entity = new Cancel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.name = event.params.name
  entity.email = event.params.email
  entity.code = event.params.code
  entity.userPassKey = event.params.userPassKey
  entity.isCancel = event.params.isCancel

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegister(event: RegisterEvent): void {
  let entity = new Register(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.name = event.params.name
  entity.email = event.params.email
  entity.code = event.params.code
  entity.userPassKey = event.params.userPassKey

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
