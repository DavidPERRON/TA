import fs from "fs";
import assert from "assert";

const data = JSON.parse(fs.readFileSync(new URL("../data/nardil_master.generated.json", import.meta.url), "utf8"));

assert.equal(data.meta.food_count, 338, "food count should be 338");
assert.equal(data.foods.length, 338, "foods array should contain 338 rows");

for (const item of data.foods) {
  const low = item.mg100.low;
  const typ = item.mg100.typ;
  const high = item.mg100.high;
  if ([low, typ, high].every(v => typeof v === "number")) {
    assert.ok(low <= typ && typ <= high, `monotonic mg100 failed for ${item.id}`);
  }
  if (item.confidence === "D") {
    const numericAny = [item.mg100.low, item.mg100.typ, item.mg100.high].some(v => typeof v === "number");
    const specialLock = item.flags?.special_lock;
    const conservativeBand = item.default_alert_threshold && item.default_alert_threshold !== "VERT LIMITÉ";
    assert.ok(numericAny || specialLock || conservativeBand, `confidence D item must keep caution signal: ${item.id}`);
  }
  assert.ok(item.family, `missing family ${item.id}`);
  assert.ok(item.cuisine_type, `missing cuisine_type ${item.id}`);
  assert.ok(item.portion_profile?.normal, `missing portion profile ${item.id}`);
}

console.log("data_integrity_ok");
