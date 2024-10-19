// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "./LibVerifier.sol";
import "./Iverifier.sol";

contract Verifier is Iverifier {

    using LiVerifier for address;

    //mapping
mapping(address user => UserDetails)public userdetails;

mapping (address owners => bool isOwner)public isOwner;

//events  
event Register(address indexed user, string name, string email, bytes32 code, string userPassKey);
event Cancel(address indexed user, string name, string email, bytes32 code, string userPassKey,bool isCancel);
event Approve(address indexed user, string name, string email, bytes32 code, string userPassKey,bool isApprove);


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

        emit Register({user:msg.sender, name:_userName, email:_userEmail, code:access_code, userPassKey:_userPassKey});

        return access_code;
        


     }
     //should be only owner
    function approve(address _userAddress)external onlyOwners {
        require(!userdetails[_userAddress].isApprove,"already approved");
        UserDetails storage details =  userdetails[_userAddress];
        details.isApprove = true;
      emit Approve({user:_userAddress, name:details.userName, email:details.userEmail, code:details.accessCode, userPassKey:details.userPassKey, isApprove:details.isApprove});

       

    }
   function cancel(address _userAddress)external onlyOwners {
        require(userdetails[_userAddress].isApprove,"not approved");
        UserDetails storage details =  userdetails[_userAddress];
        details.isApprove = false;
        emit Cancel({user:_userAddress, name:details.userName, email:details.userEmail, code:details.accessCode, userPassKey:details.userPassKey, isCancel:details.isApprove});
      

       

    }

  function access(address _userAddress)external view  returns(bool){
        require(userdetails[_userAddress].isApprove,"not approved");
        return true;  

       

    }

    function addOtherOwners(address _otherOwner)public  onlyOwners{
        require(!isOwner[_otherOwner], "already added");
        isOwner[_otherOwner] = true;

    }
    

}