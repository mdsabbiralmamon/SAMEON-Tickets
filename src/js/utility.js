// Buy Tickets Section JS
function goToDiv() {
    const goToDiv = document.getElementById('seat-plan-and-check-out');
    goToDiv.scrollIntoView({ behavior: 'smooth' });
}

//Seat Map Section Js
let clickCount = 0;
document.getElementById('busSeatMapMain').addEventListener('click', function (event) {
    const selected = document.getElementById(event.target.id);
    if (selected.classList.contains('bg-[#1DD100]')) {
        clickCount--;
        selected.classList.remove('bg-[#1DD100]');
        const findSelected = document.getElementsByTagName('td');
        const selectedSeat = selected.innerText;
        for (let i = 0; i <= findSelected.length - 1; i++) {
            const selectedValue = findSelected[i].innerText;
            if (selectedValue === selectedSeat) {
                const getRow = document.getElementById(`rID-${selectedValue}`);
                const tableContainer = document.getElementById('tableBodyContainer');
                tableContainer.removeChild(getRow);
            }
            else {
                console.log('false');
            }

        };

    }
    else {
        if (clickCount <= 3) {
            selected.classList.add('bg-[#1DD100]');
            const dynamicRowID = `rID-${selected.innerText}`;
            const tableRow = document.createElement('tr');
            tableRow.id = dynamicRowID;
            tableRow.innerHTML = `<td>${selected.innerText}</td> <td class="text-center">Economoy</td> <td class="text-right">550</td>`;
            const tableContainer = document.getElementById('tableBodyContainer');
            tableContainer.appendChild(tableRow);
            clickCount++;
        }
        else {
            console.log('invalid');
        }
    }
    document.getElementById('selectedSeatsCount').innerText = clickCount;
    const remaining = 40 - clickCount;
    document.getElementById('dynamicSeatCount').innerText = remaining;
    const totalPrice = clickCount * 550;
    document.getElementById('totalPrice').innerText = totalPrice;
    if (clickCount <= 3) {
        document.getElementById('disabledButton').setAttribute('disabled', 'disabled');
    }
    else {
        document.getElementById('disabledButton').removeAttribute('disabled');
    }
    if(document.getElementById('selectedSeatsCount').innerText < 4){
        document.getElementById('couponContainer').classList.remove('hidden');
        document.getElementById('grandTotalPrice').innerText = parseInt(document.getElementById('selectedSeatsCount').innerText)*550;
    }
    else if(document.getElementById('selectedSeatsCount').innerText = 4){
        document.getElementById('grandTotalPrice').innerText = 4*550;
    }
});

// Coupon Code
function checkCoupon() {
    const originalPrice = 2200;
    const new15 = "NEW15";
    const couple = "Couple 20";
    const coupon = document.getElementById("couponCode").value;
    if (coupon === new15) {
        const discountAmount = (originalPrice * 15) / 100;
        const discountedPrice = originalPrice - discountAmount;
        document.getElementById('couponContainer').classList.add('hidden');
        document.getElementById('grandTotalPrice').innerText = discountedPrice;
    }
    else if (coupon === couple) {
        const discountAmount = (originalPrice * 20) / 100;
        const discountedPrice = originalPrice - discountAmount;
        document.getElementById('couponContainer').classList.add('hidden');
        document.getElementById('grandTotalPrice').innerText = discountedPrice;
    }
    else {
        alert('invalid coupon');
    }
}

// Next Button
function completeOrder(){
    const inputName = document.getElementById('yourName').value;
    const inputNumber = document.getElementById('yourNumber').value;
    if(inputName === ''){
        alert('Name can not be empty');
    }
    else if(inputNumber === ''){
        alert('Number can not be empty');
    }
    else{
        purchaseSuccess.showModal();
    }
}