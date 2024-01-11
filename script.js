document.getElementById("btn").addEventListener("click", function (e) {
    let input1 = (document.getElementsByTagName("input")[0].value);
    let input2 = (document.getElementsByTagName("input")[1].value -1);
    let input3 = (document.getElementsByTagName("input")[2].value);   
    if(input2 < 12 && input2 >= 0){
    }
    else{
        alert("enter correct month")
    }
    if(input1 == "" || input2 == "" || input3 == ""){
         alert("enter date")
        }
        else{
            let date = new Date(input1, input2, input3);
            let day = date.getDay();
            switch (day) {
                case 1: document.getElementById("res").innerHTML = "Monday";
                break;
                case 2: document.getElementById("res").innerHTML = "Tuesday";
                    break;
                case 3: document.getElementById("res").innerHTML = "Wednesday";
                break;
                case 4: document.getElementById("res").innerHTML = "Thursday";
                break;
                case 5: document.getElementById("res").innerHTML = "Friday";
                break;
                case 6: document.getElementById("res").innerHTML = "Saturday";
                break;
                case 7: document.getElementById("res").innerHTML = "Sunday";
        }
    }
})