import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import { createActor } from "../declarations/counter";
import isomorphic from "isomorphic-fetch";

const counterId = process.env.CANISTER_ID_COUNTER; //?
const counter = createActor(counterId, {
  agentOptions: {
    host: "http://127.0.0.1:4943",
    disableNonce: true,
    fetch: global.fetch ?? isomorphic,
  },
});

const main = async () => {
  await counter.write(BigInt(0));
  await counter.read(); //?

  for (let i = 0; i < 10; i++) {
    await counter.inc();

    const count = await counter.read();

    console.log(`Iteration ${i}, Count is ${count}`);
  }
};

main();
