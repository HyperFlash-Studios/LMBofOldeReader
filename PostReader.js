$(document).ready(function() {
  var divCount =  $('div[class="counter"]:contains(\'<= 48\')');
  var ofOlde = [];
  for (var i = 0; i < divCount.length; i++) {
  ofOlde.push(divCount);
    console.log(ofOlde);
}
  if(divCount.length === 0) {
    console.log("There are no users with this many posts!");
  }
});


//dooot
var ofOldeUser = $('span[class="UserName lia-user-name"]:last-child').text();
var postCount = parseInt($('div[class="counter"]').text().replace(" posts",""));
  if (postCount >= 48) {
  console.log(ofOldeUser);
  } else {
  console.log("There are no users with this many posts!");
  }
