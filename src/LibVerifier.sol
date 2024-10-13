// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

library LiVerifier{

    function generateCode(address _user,string memory _userName,string memory _userPassKey )external pure returns(bytes32){
        return keccak256(abi.encode(_user,_userName,_userPassKey));
    }
}