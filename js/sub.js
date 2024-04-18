function addBackgroundById(elementId){
  document.getElementById(elementId).classList.add('bg-red-700');

  const currentNoOfSeat = document.getElementById('currentNoOfSeat');
  const selectedSeatText = currentNoOfSeat.innerText;
  const noOfSelectedSeat = parseInt(selectedSeatText);
  // console.log(noOfSelectedSeat);
  const newNumberOfSeat = noOfSelectedSeat+1;
  currentNoOfSeat.innerText = newNumberOfSeat;
  document.getElementById('totalPrice').innerText = newNumberOfSeat*550;


  if (newNumberOfSeat > 4){
    currentNoOfSeat.innerText = 4;
   
    document.getElementById(elementId).classList.remove('bg-red-700');
    alert ("YOU ARE ALLOWED ONLY FOR FOUR (4 TICKET");


  }



  console.log(totalPriceInt);
  // const totalPriceText = totalPrice.innerText;
  // const totalPriceInt = parseInt(totalPriceText);

  // const finaltotalPriceInt = totalPriceInt*2;
  // totalPrice = finaltotalPriceInt.innerText;


}  