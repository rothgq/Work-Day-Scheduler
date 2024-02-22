const liveTime = dayjs();
let currentHour = dayjs().hour();

$("#currentDay").text(liveTime.format('dddd, MMMM DD'));

$(document).ready(function () {

  $('.saveBtn').on('click', function() {
    let time = $(this).parent().attr('id');
    let note = $(this).siblings('.description').val();

    localStorage.setItem(time, note);
  })

  $('.time-block').each(function() {
    let timeBlock = $(this).attr("id").split("-")[1];

    if (currentHour < timeBlock) {
      $(this).addClass('future');
      $(this).removeClass('present');
      $(this).removeClass('past');
    } else if (currentHour == timeBlock) {
      $(this).addClass('present');
      $(this).removeClass('future');
      $(this).removeClass('past');
    } else if (currentHour > timeBlock) {
      $(this).addClass('past');
      $(this).removeClass('future');
      $(this).removeClass('present');
    }
    
  })

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-12 .description').val(localStorage.getItem('hour-1'));
  $('#hour-13 .description').val(localStorage.getItem('hour-2'));
  $('#hour-14 .description').val(localStorage.getItem('hour-3'));
  $('#hour-15 .description').val(localStorage.getItem('hour-4'));
  $('#hour-16 .description').val(localStorage.getItem('hour-5'));

});
