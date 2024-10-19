import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { Approve } from "../generated/schema"
import { Approve as ApproveEvent } from "../generated/Verifier/Verifier"
import { handleApprove } from "../src/verifier"
import { createApproveEvent } from "./verifier-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let name = "Example string value"
    let email = "Example string value"
    let code = Bytes.fromI32(1234567890)
    let userPassKey = "Example string value"
    let isApprove = "boolean Not implemented"
    let newApproveEvent = createApproveEvent(
      user,
      name,
      email,
      code,
      userPassKey,
      isApprove
    )
    handleApprove(newApproveEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Approve created and stored", () => {
    assert.entityCount("Approve", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Approve",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Approve",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "Approve",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "email",
      "Example string value"
    )
    assert.fieldEquals(
      "Approve",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "code",
      "1234567890"
    )
    assert.fieldEquals(
      "Approve",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userPassKey",
      "Example string value"
    )
    assert.fieldEquals(
      "Approve",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isApprove",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
