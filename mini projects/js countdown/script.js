let endDate = "20 April 2024 ";

document.getElementById("end-date").innerText = endDate;
let inputs = document.querySelectorAll("input");

let clock = () => {
    let end = new Date(endDate);
    let now = new Date();
    let diff = (end - now)/1000;
    // 1 day = 24 hrs
    // 1 hr = 20 mins
    // 60 min = 3600 sec
    if(diff < 0){
        return;
    }
    inputs[0].value = Math.floor(diff/3600/24); // using .value here bc it's input tag
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor((diff)%60);
}
setInterval(
    ()=>{
        clock();
    },1000
)