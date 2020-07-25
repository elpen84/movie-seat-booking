const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

console.log(typeof ticketPrice);

//update total and count
function updatedSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;

  // copy selected seats into arr
  //map through array
  //return a new array of indexes

  const seatsIndex = [...selectedSeats].map(function(seat) {
      return [...].indexOf(seat)
  })
  
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updatedSelectedCount();
});

//seat select event
container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updatedSelectedCount();
  }
});
