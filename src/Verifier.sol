// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "./LibVerifier.sol";
import "./Iverifier.sol";

contract Verifier is Iverifier {

    using LiVerifier for address;

    //mapping
mapping(bytes32 accessCode => UserDetails)public userdetails;
mapping(bytes32 accesscode => bool isApprove)public isApprove;
mapping (address owners => bool isOwner)public isOwner;
constructor(){
    isOwner[msg.sender] = true;
}

modifier onlyOwners(){
    require(isOwner[msg.sender],"not authorize");
    _;
}

     function register(string memory _userName,string memory _userPassKey)external returns(bytes32){
        bytes32 access_code = msg.sender.generateCode(_userName,_userPassKey);
        
        userdetails[access_code] = UserDetails({userName: _userName,userPassKey:_userPassKey,accessCode:access_code});


        return access_code;

     }
     //should be only owner
    function approve(bytes32 _userKey)external onlyOwners {
        require(!isApprove[_userKey],"already approved");

        isApprove[_userKey] = true;

    }
    function cancel(bytes32 _userKey) external onlyOwners{
         require(isApprove[_userKey],"already not yet approved");

        isApprove[_userKey] = false;

    } 

    function access(bytes32 _userKey)external view returns (bool){
         require(isApprove[_userKey],"need approval");

        return true;
    } 

    function addOtherOwners(address _otherOwner)public  onlyOwners{
        require(!isOwner[_otherOwner], "already added");
        isOwner[_otherOwner] = true;

    }
    

}