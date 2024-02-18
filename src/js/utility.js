// Buy Tickets Section JS
function goToDiv(){
    const goToDiv = document.getElementById('seat-plan-and-check-out');
    goToDiv.scrollIntoView({behavior: 'smooth'});
}

//Seat Map Section Js
let clickCount = 0;
document.getElementById('busSeatMapMain').addEventListener('click',function(event){
    console.log(event.target.id);
    const selected = document.getElementById(event.target.id);
    if(selected.classList.contains('bg-[#1DD100]')){
        clickCount--;
        selected.classList.remove('bg-[#1DD100]');
    }
    else{
        if(clickCount <= 3){
            selected.classList.add('bg-[#1DD100]');
            clickCount++;
        }
        else{
            console.log('invalid');
        }
    }
    console.log(clickCount);
    document.getElementById('selectedSeatsCount').innerText = clickCount;
    const remaining = 40 - clickCount;
    document.getElementById('dynamicSeatCount').innerText = remaining;
});