function checkCreds(){
    //collect data
    var fstName = document.getElementById("FName").value;
    var lstName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    //work with data
    var fullName = fstName + " " +lstName; 
    console.log("the full name is " + fullName);
    console.log("the badge number is " + badgeNumb);
    var fullLength = fullName.length;
    console.log ("The name length is " + fullLength);

    //Checks the inputs.
    if(fullLength > 20 || fullLength < 2){
        document.getElementById("loginstatus").innerHTML = "Invalid name entry, please try again"
    }
    //ranges can be implemented!
    else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginstatus").innerHTML = "Invalid badge number, please try again"
    }
    else{
        alert("Access Granted, Welcome " + fullName);
        location.replace("./(Current) UATSpace Efficiency.html");
    }
}