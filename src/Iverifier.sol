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
    function approve(address _user)external ;
    function cancel(address _user) external ;

    function access(address _user)external returns(bool) ;
    
}