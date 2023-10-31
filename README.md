# Nonce Breaking Change:

Somewhere in a new version of DFX, we can reproduce a bug where identical update calls are not passed along to the canister. This is unexpected behavior. 

Steps to reproduce:
* clone the project and `npm install`
* `dfx start --clean`
* `dfx deploy`
* `npm start`

Verify that the iteration is progressing, but the count does not. If we remove the `disableNonce` field on line 7 of [index.ts](./src/counter_client/index.ts), the calls will increment as expected.
