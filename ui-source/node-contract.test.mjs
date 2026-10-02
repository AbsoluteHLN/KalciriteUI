import test from "node:test"
import assert from "node:assert/strict"
import { verifyUiSystem } from "./verify-contract.mjs"

test("canonical UI system passes the portable Node contract", async () => {
  const result = await verifyUiSystem(new URL("./", import.meta.url))
  assert.deepEqual(result.errors, [])
  assert.equal(result.themeCount, 6)
  assert.equal(result.hostCount, 1)
})
