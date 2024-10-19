import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import { Approve, Cancel, Register } from "../generated/Verifier/Verifier"

export function createApproveEvent(
  user: Address,
  name: string,
  email: string,
  code: Bytes,
  userPassKey: string,
  isApprove: boolean
): Approve {
  let approveEvent = changetype<Approve>(newMockEvent())

  approveEvent.parameters = new Array()

  approveEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  approveEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  approveEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  approveEvent.parameters.push(
    new ethereum.EventParam("code", ethereum.Value.fromFixedBytes(code))
  )
  approveEvent.parameters.push(
    new ethereum.EventParam(
      "userPassKey",
      ethereum.Value.fromString(userPassKey)
    )
  )
  approveEvent.parameters.push(
    new ethereum.EventParam("isApprove", ethereum.Value.fromBoolean(isApprove))
  )

  return approveEvent
}

export function createCancelEvent(
  user: Address,
  name: string,
  email: string,
  code: Bytes,
  userPassKey: string,
  isCancel: boolean
): Cancel {
  let cancelEvent = changetype<Cancel>(newMockEvent())

  cancelEvent.parameters = new Array()

  cancelEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam("code", ethereum.Value.fromFixedBytes(code))
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam(
      "userPassKey",
      ethereum.Value.fromString(userPassKey)
    )
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam("isCancel", ethereum.Value.fromBoolean(isCancel))
  )

  return cancelEvent
}

export function createRegisterEvent(
  user: Address,
  name: string,
  email: string,
  code: Bytes,
  userPassKey: string
): Register {
  let registerEvent = changetype<Register>(newMockEvent())

  registerEvent.parameters = new Array()

  registerEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  registerEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  registerEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  registerEvent.parameters.push(
    new ethereum.EventParam("code", ethereum.Value.fromFixedBytes(code))
  )
  registerEvent.parameters.push(
    new ethereum.EventParam(
      "userPassKey",
      ethereum.Value.fromString(userPassKey)
    )
  )

  return registerEvent
}
