//displays current date in header
var time = dayjs();
$('#currentDay').text(time.format('dddd, MMMM DD'));

//event listener for clicking the save buttons
var saveButton = $('.saveBtn');
saveButton.on('click', function() {
  var time = $(this).parent().attr('id');
  var task = $(this).siblings('.description').val();
  localStorage.setItem(time, task);
});

//applies past, present, or future classes
$('.time-block').each(function() {
  var timeBlock = $(this).attr('id');
  var currentHour = time.format('H');
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
  var timeBlock = $(this).attr("id");
  var task = localStorage.getItem(timeBlock);
  $(this).children('.description').val(task);
});
