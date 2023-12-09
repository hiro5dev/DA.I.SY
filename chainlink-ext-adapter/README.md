# Chainlink NodeJS External Adapter Template

This template provides a basic framework for developing Chainlink external adapters in NodeJS. Comments are included to assist with development and testing of the external adapter. Once the API-specific values (like query parameters and API key authentication) have been added to the adapter, it is very easy to add some tests to verify that the data will be correctly formatted when returned to the Chainlink node. There is no need to use any additional frameworks or to run a Chainlink node in order to test the adapter.

## Creating your own adapter from this template

Clone this repo and change "ExternalAdapterProject" below to the name of your project

```bash
git clone https://github.com/thodges-gh/CL-EA-NodeJS-Template.git ExternalAdapterProject
```

Enter into the newly-created directory

```bash
cd ExternalAdapterProject
```

You can remove the existing git history by running:

```bash
rm -rf .git
```

See [Install Locally](#install-locally) for a quickstart

## Input Params

- `base`, `from`, or `coin`: The symbol of the currency to query
- `quote`, `to`, or `market`: The symbol of the currency to convert to

## Output

```json
{
 "jobRunID": "278c97ffadb54a5bbb93cfec5f7b5503",
 "data": {
  "USD": 164.02,
  "result": 164.02
 },
 "statusCode": 200
}
```

## Install Locally

Install dependencies:

```bash
yarn
```

### Test

Run the local tests:

```bash
yarn test
```

Natively run the application (defaults to port 8080):

### Run

```bash
yarn start
```

## Call the external adapter/API server

```bash
curl -X POST -H "content-type:application/json" "http://localhost:8080/" --data '{ "id": 0, "data": { "from": "ETH", "to": "USD" } }'
```

## Docker

If you wish to use Docker to run the adapter, you can build the image by running the following command:

```bash
docker build . -t external-adapter
```

Then run it with:

```bash
docker run -p 8080:8080 -it external-adapter:latest
```

## Serverless hosts

After [installing locally](#install-locally):

### Create the zip

```bash
zip -r external-adapter.zip .
```


# Run Ext-adapter
```bash
❯ yarn start

# API#1
❯ curl -X POST -H "content-type: application/json"  "http://localhost:8080/" --data '{"id": 1, "data": {"cityName":"London,uk"} }'

# API#2
❯ curl -X POST -H "content-type: application/json"  "http://localhost:8080/" --data '{"id": 1, "data": {"title": "foo1","body": "bar"} }'

```

