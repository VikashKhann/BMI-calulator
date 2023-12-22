const height=document.getElementById("height")
const weight=document.getElementById("weight")
const calculate=document.getElementById("calculate")
const final_bmi=document.getElementById("final_bmi")

let calculated_bmi=0
let category=""

function calc_bmi(){
    calculated_bmi=calculated_bmi = weight.value / ((height.value / 100) ** 2);
    console.log(calculated_bmi.toFixed(2))

    if (calculated_bmi < 18.5) {
        category = "Underweight";
      } else if (calculated_bmi < 25) {
        category = "Normal weight";
      } else if (calculated_bmi < 30) {
        category = "Overweight";
      } else {
        category = "Obese";
      }

      final_bmi.innerHTML=calculated_bmi.toFixed(2)+"("+category+")"

}

calculate.addEventListener('click',calc_bmi)