// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

interface  Iverifier {
    struct UserDetails{
        string userName;
        string userPassKey;
        string userEmail;
        bytes32 accessCode;
        bool isApprove;
    }

    function register(string memory _userName,string memory _userPassKey, string memory _userEmail)external returns(bytes32);
    function approve(bytes32 _userKey)external ;
    function cancel(bytes32 _userKey) external ;

    function access(bytes32 _userKey)external returns(bool) ;
    
}