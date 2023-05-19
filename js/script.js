$(document).ready(function(){
  const date = new Date();
  const hour = date.geHours();
  let message = '';
  if(hour <= 12 ){
    message = 'GOOD MORNING';
  }
  if(hour > 12 ){
    message = 'GOOD AFTERNOON';
  }
  if(hour >= 17 ){
    message = 'GOOD EVENING';
  }
 $("#headingtext").empty().append(message + ' From VIREAKNAN');
})