//DOM
document.getElementById("title1").innerHTML= "University Ranking System in Ottawa";
//Jquery
$("#title2").text("Leave your infomation, you will know the university ranking list immediately")
//array and object
var schools = [
    {school: "Algonquin College",ranking : 1},
    {school: "Ottawa University",ranking : 2},
    {school: "Carleton University",ranking: 3},
    ];
//function
function validate(e){
    e.preventDefault();
    var valid=true;
    // if condition
    if(profile.name.value == ""){
        document.getElementById('nameWarning').innerHTML=" *Please enter your name.*";
        valid = false;
    }
    if(profile.tel.value == ""){
        document.getElementById('telWarning').innerHTML=" *Please enter your telephone number.*";
        valid=false;
    }
    if(profile.address1.value == ""){
        document.getElementById('addWarning').innerHTML=" *Please enter your address.*";
        valid=false;
    }
    if(profile.city.value == ""){
        document.getElementById('cityWarning').innerHTML=" *Please enter your city.*";
        valid=false;
    }
    if(valid){
        //for loop
        for(i=0;i<3;i++){
            alert(schools[i].school+" "+":"+" "+schools[i].ranking)
        }
    }
    return valid;      
};

