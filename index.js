document.querySelector("#b").addEventListener("click", calculateBmi);

document.querySelector("#clear").addEventListener("click", clearFields);

document.addEventListener("keydown",function(event)
{
//   console.log(event);
  if(event.key==="Enter")
    calculateBmi();
});

function calculateBmi() {
    // console.log("This is this"+this);
    var height = document.getElementById("heightValue").value;
    height = height / 100;
    // console.log(height);

    var weight = document.getElementById("weightValue").value;
    if (height === "" || weight === "" || isNaN(height) || isNaN(weight)|| height===0 || weight===0){
        alert("Enter the fields.");
    }
    else {
        var totalBmi = weight / (height * height);
        totalBmi = totalBmi.toFixed(2);
        // console.log(totalBmi);
        if (totalBmi <= 18.4) {
            document.getElementById("bmi").innerHTML = "Your BMI is " + totalBmi + ",and You are UnderWeight";
        }
        else if (totalBmi > 18.4 && totalBmi <= 24.9) {
            document.getElementById("bmi").innerHTML = "Your BMI is " + totalBmi + ",and You are Normal";
        }
        else {
            document.getElementById("bmi").innerHTML = "Your BMI is " + totalBmi + ",and You are OverWeight";
        }
    }
}

function clearFields() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    document.querySelector("#bmi").innerHTML = "";

}
