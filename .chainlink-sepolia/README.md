# Running a Chainlink Node - [docs](https://docs.chain.link/chainlink-nodes/v1/running-a-chainlink-node/#overview)
## To start Chainlink node

```sh

❯ cd /Users/aayush/Sandbox/chainlink-nov23/.chainlink-sepolia
❯ docker run --platform linux/x86_64/v8 --name chainlink -v ~/Sandbox/chainlink-nov23/.chainlink-sepolia:/chainlink -it -p 6688:6688 --add-host=host.docker.internal:host-gateway smartcontract/chainlink:2.5.0 node -config /chainlink/config.toml -secrets /chainlink/secrets.toml start

```

## Check docker container running

```sh
❯ docker ps -a -f name=chainlink
```

## Chainlink Node GUI  [http://localhost:6688](http://localhost:6688)

[CL Node: POC]
Node addaress: 0x9114C98E9Ba6A8Ac5714f761c456E7720Bf7CF52
Operator/oracle SC address: 0x1a05147FEb43F746461bC03a986b808a93c11317
Admin address: 0x3FF704EDCB27F0C104f37774D09e4bFc7D822B2D

jobId: 0e29d9d9f7584434a7fba36393626c16