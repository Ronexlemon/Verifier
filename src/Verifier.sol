// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "./LibVerifier.sol";
import "./Iverifier.sol";

contract Verifier is Iverifier {

    using LiVerifier for address;

    //mapping
mapping(address user => UserDetails)public userdetails;
mapping(bytes32 accesscode => bool isApprove)public isApprove;
mapping (address owners => bool isOwner)public isOwner;

constructor(){
    isOwner[msg.sender] = true;
}

modifier onlyOwners(){
    require(isOwner[msg.sender],"not authorize");
    _;
}

     function register(string memory _userName,string memory _userPassKey,string memory _userEmail)external returns(bytes32){
        bytes32 access_code = msg.sender.generateCode(_userName,_userPassKey);
       
        
        userdetails[msg.sender] = UserDetails({userName: _userName,userPassKey:_userPassKey,accessCode:access_code,userEmail:_userEmail,isApprove:false});


        return access_code;

     }
     //should be only owner
    function approve(address _userAddress)external onlyOwners {
        require(!userdetails[_userAddress].isApprove,"already approved");
        UserDetails storage details =  userdetails[_userAddress];
        details.isApprove = true;
      

       

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