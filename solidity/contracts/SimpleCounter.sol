// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SimpleCounter {
    uint256 private value;

    // Set an initial value
    function setValue(uint256 _initialValue) public {
        value = _initialValue;
    }

    // Update the value by incrementing it
    function increment() public {
        value += 1;
    }

    // Retrieve the current value
    function getValue() public view returns (uint256) {
        return value;
    }
}