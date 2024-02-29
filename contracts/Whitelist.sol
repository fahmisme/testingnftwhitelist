// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Whitelist {
    uint8 public maxWhitelistedAddresses;

    mapping(address => bool) public whitelistedAddressess;

    uint8 public numAddressesWhitelisted;

    constructor(uint8 _maxWhiteListedAddresses) {
        maxWhitelistedAddresses = _maxWhiteListedAddresses;
    }

    function addAddressToWhitelist() public {
        require(
            !whitelistedAddressess[msg.sender],
            "Sender has already been been whitelisted"
        );

        require(
            numAddressesWhitelisted <= maxWhitelistedAddresses,
            "Addresses can't be added, limit reached"
        );

        whitelistedAddressess[msg.sender] = true;
        numAddressesWhitelisted += 1;
    }
}
