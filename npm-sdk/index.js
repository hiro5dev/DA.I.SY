const { ethers } = require("ethers");

var readlineSync = require("readline-sync");

// contract constants. Do not change
const contractAddress = "0x3db79D9A7AAC94365656E5A0e14070Ea02981F11";
const contractAbi = [
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "input",
        type: "string",
      },
    ],
    name: "negateString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialValue",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const val = process.argv[2];

// Call the contract method
async function callContract() {
  // Prompt user for private key
  const privateKey = readlineSync.question("Enter your private key: ", {
    hideEchoBack: true,
  });

  // console.log("privateKey:", privateKey);
  // Prompt user for node URL
  const nodeUrl = readlineSync.question("Enter your Ethereum node URL: ", {
    hideEchoBack: true,
  });
  // console.log("nodeUrl:", nodeUrl);
  const provider = new ethers.providers.JsonRpcProvider(nodeUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

  // Call the addNotPrefix method
  const inputString = readlineSync.question("Enter a string: ");
  console.log("Input String:", inputString); // Display the input string

  try {

    console.log(
      `Calling contract.negateString() with input ${inputString} ...`
    );
    const transactionResponse = await contract.negateString(inputString);
    console.log("transactionResponse:", transactionResponse);
  } catch (error) {
    console.error("Error calling contract method:", error.message);
  }
}

// Execute the script
// callContract();
module.exports = callContract;
