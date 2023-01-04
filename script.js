//displays current date in header
var dayjs = dayjs();
$('#currentDay').text(dayjs.format('dddd, MMMM DD'));

//event listener for clicking the save buttons
var saveButton = $('.saveBtn');
saveButton.on('click', function() {
  var hour = $(this).parent().attr('id');
  var description = $(this).siblings('.description').val();
  localStorage.setItem(hour, description);
});

//applies past, present, or future classes
$('.time-block').each(function() {
  var timeBlock = $(this).attr('id');
  var currentHour = dayjs.format('HH');
  if (timeBlock < currentHour) {
    $(this).addClass('past');
  }
  if (timeBlock > currentHour) {
    $(this).addClass('future');
  }
  if (timeBlock === currentHour) {
    $(this).addClass('present');
  }
  console.log("Time Block:" + timeBlock)
  console.log("Current Hour:" + currentHour)
});

//gets user input from local storage and sets it to corresponding textarea elements
$('.time-block').each(function () {
  var hour = $(this).attr('id');
  var description = localStorage.getItem(hour);
  $(this).children('.description').val(description);
  console.log(description);
});
