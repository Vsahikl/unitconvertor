

let obj = {
  unit1: "liter",
  unit2: "Milliliter",
};
const unitConverter = document.getElementById("unitConverter");
function unitPut(obj) {
  unitConverter.innerHTML = `

<div class="col-md-5">
<input type="number" class="form-control remove renderData" id="unitOne" placeholder="choose unit type" title="choose unit type">
<select class="form-select remove unitTypeOne" aria-label="Default select example" id="unitTypeOne">
    <option value="1">${obj.unit1}</option>
    <option value="2">${obj.unit2}</option>
   
  </select>
</div>
<div class="col-md-2">
<h1>=</h1>
</div>                          
<div class="col-md-5">
<input type="number" class="form-control remove renderData" id="unitTwo" placeholder="choose unit type" title="choose unit type">
<select class="form-select remove unitTypeOne" aria-label="Default select example" id="unitTypeTwo">
<option value="1">${obj.unit2}</option>
<option value="2">${obj.unit1}</option>
  </select>
</div>


`;
input1(obj.unit1, 0);
input2(obj.unit2, 1);
selectUnit();
}
unitPut(obj);

function input1(text, i) {
let unitOne = document.getElementById("unitOne");
let unitTwo = document.getElementById("unitTwo");
  unitOne.addEventListener("keyup", () => {
    // console.log(unitOne.value);
    if (text.toLowerCase() == "liter") {
      let data = unitOne.value * 1000;
      unitTwo.value = data;
      console.log(unitTwo.value);
    } else if (text.toLowerCase() == "milliliter") {
      let data = unitOne.value / 1000;
      unitTwo.value = data;
      console.log(unitTwo.value);
    }
    else if (text.toLowerCase() == "meter") {
        let data = unitOne.value * 100;
        unitTwo.value = data;
        console.log(unitTwo.value);
      }
      else if (text.toLowerCase() == "centimeter") {
        let data = unitOne.value / 100;
        unitTwo.value = data;
        console.log(unitTwo.value);
      }
      else if (text.toLowerCase() == "gram") {
        let data = unitOne.value * 1000;
        unitTwo.value = data;
        console.log(unitTwo.value);
      }
      else if (text.toLowerCase() == "kilogram") {
        let data = unitOne.value / 1000;
        unitTwo.value = data;
        console.log(unitTwo.value);
      }
      else if (text.toLowerCase() == "days") {
        let data = unitOne.value * 24;
        unitTwo.value = data;
        console.log(unitTwo.value);
      }
      else if (text.toLowerCase() == "hours") {
        let data = unitOne.value / 24;
        unitTwo.value = data;
        console.log(unitTwo.value);
      }
      else if (text.toLowerCase() == "degree") {
        let data = (unitOne.value*9.0/5.0)+32;
        unitTwo.value = data;
        console.log(unitTwo.value);
      }
      else if (text.toLowerCase() == "fahrenheit") {
        let data =(unitOne.value-32)*9.0/5.0;
        unitTwo.value = data;
        console.log(unitTwo.value);
      }
  });
}
function input2(text, i) {
let unitOne = document.getElementById("unitOne");
let unitTwo = document.getElementById("unitTwo");
  unitTwo.addEventListener("keyup", () => {
    // console.log(unitOne.value);
    if (text.toLowerCase() == "liter") {
      let data = unitTwo.value * 1000;
      unitOne.value = data;
      console.log(unitOne.value);
    } else if (text.toLowerCase() == "milliliter") {
      let data = unitTwo.value / 1000;
      unitOne.value = data;
      console.log(unitOne.value);
    }
    else if (text.toLowerCase() == "meter") {
        let data = unitTwo.value*100;
        unitOne.value = data;
        console.log(unitOne.value);
      }
      else if (text.toLowerCase() == "centimeter") {
        let data = unitTwo.value / 100;
        unitOne.value = data;
        console.log(unitOne.value);
      }
      else if (text.toLowerCase() == "gram") {
        let data = unitTwo.value*1000;
        unitOne.value = data;
        console.log(unitOne.value);
      }
      else if (text.toLowerCase() == "kilogram") {
        let data = unitTwo.value / 1000;
        unitOne.value = data;
        console.log(unitOne.value);
      }
      else if (text.toLowerCase() == "days") {
        let data = unitTwo.value*24;
        unitOne.value = data;
        console.log(unitOne.value);
      }
      else if (text.toLowerCase() == "hours") {
        let data = unitTwo.value / 24;
        unitOne.value = data;
        console.log(unitOne.value);
      }
      else if (text.toLowerCase() == "degree") {
        let data = (unitTwo.value*9.0/5.0)+32;
        unitOne.value = data;
        console.log(unitOne.value);
      }
      else if (text.toLowerCase() == "fahrenheit") {
        let data =(unitTwo.value-32)*9.0/5.0;
        unitOne.value = data;
        console.log(unitOne.value);
      }
  });
}

function solve(text, i) {
  // console.log('index is:', i);
  if (i == 0) {
    input1(text, i);
  } else {
    input2(text, i);
  }
}
input1(obj.unit1, 0);
input2(obj.unit2, 1);
// function selectUnitAtStartTime(){
//     let renderData = document.getElementsByClassName("renderData");
// for (let i = 0; i < renderData.length; i++) {
//   renderData[i].addEventListener("click", () => {
//     // console.log('working :')
//     if(i==0){
//         input1(obj.unit1,i)
        
//     }else{
//        input2(obj.unit2,i)
       
//     }
//   });
// }
// }

// selectUnitAtStartTime();
// function unitExchange(text,i){
 
//   if(text!=obj.unit1){
//     let temp=obj.unit1;
// obj={
//   unit1:obj.unit2,
// unit2:temp,
// }
//   }
//   return unitPut(obj);
// // console.log('text is ', text,i);
// // console.log('obj is: ',obj);
// }
 function selectUnit(){
    let unitTypeOne = document.getElementsByClassName("unitTypeOne");
    for (let i = 0; i < unitTypeOne.length; i++) {
      unitTypeOne[i].addEventListener("click", () => {
        var text = unitTypeOne[i].options[unitTypeOne[i].selectedIndex].text;
        console.log(text);
      //  unitExchange(text,i);
       solve(text, i);
      });
    }
   }
   selectUnit();


function createObj(text) {
  if (text.toLowerCase() == "volume") {
    obj = {};
    obj = {
      unit1: "liter",
      unit2: "Milliliter",
    };
    console.log(obj);

    return unitPut(obj);
  } else if (text.toLowerCase() == "length") {
    obj = {};
    obj = {
      unit1: "Meter",
      unit2: "Centimeter",
    };
    console.log(obj);

    return unitPut(obj);
  } else if (text.toLowerCase() == "mass") {
    obj = {};
    obj = {
      unit1: "Gram",
      unit2: "Kilogram",
    };
    console.log(obj);

    return unitPut(obj);
  } else if (text.toLowerCase() == "temperature") {
    obj = {};
    obj = {
      unit1: "Degree",
      unit2: "Fahrenheit",
    };
    console.log(obj);

    return unitPut(obj);
  } else if (text.toLowerCase() == "time") {
    obj = {};
    obj = {
      unit1: "Days",
      unit2: "Hours",
    };
    console.log(obj);

    return unitPut(obj);
  }
}
const unit = document.getElementById("unit");
unit.addEventListener("click", () => {
  var text = unit.options[unit.selectedIndex].text;
  console.log(text);
  createObj(text);
});
