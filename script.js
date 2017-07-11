var rightSection = $('.rightside');

var counter = 0;

var myArray = [];


// enterButton.addEventListener('click', function() {
//   var inputTitle = $('#website-title');
//    var inputURL= $('#website-url');
//    console.log(inputTitle.val());
//   $(rightSection).prepend(
// "<div class='rightmid'>" +
//   "<div class='bookmarkbox'>" +
//     "<h2 id='bookmark-line-title'>" + inputTitle.val() + "</h2>" +
//     "<hr id='hrOne'>" +
//     "<a href='" + inputURL.val()  + "' class='bookmarklinks'>" + inputURL.val() + "</a>" +
//     "<hr id='hrTwo'>" +
//     "<input class='button' id='mark-as-read-button' type='submit' name='enter' value='Read'>" +
//     "<input class='button' id='delete-button' type='submit' name='enter' value='Delete'>" +
//   "</div>"
// );
// })




var inputTitle = document.getElementById('website-title')
var enterButton = document.getElementById('enter-button');
inputTitle.addEventListener('keyup', function() {
     if (inputTitle.value !== "") {
         enterButton.disabled = false;
     } else {
         enterButton.disabled = true;
     }
 });

// hello
// enterButton.addEventListener('click', function() {
//   var inputTitle = $('#website-title');
//   var inputURL= $('#website-url');
// console.log(inputTitle.val());
//   $(rightSection).prepend(
//     "<div class='bookmark-container'>" +
//       "<h2 id='bookmark-line-title'>" + inputTitle.val() + "</h2>" +
//       "<div class='linkdiv'>" +
//         "<a href='" + inputURL.val()  + "' class='bookmarklinks'>" + inputURL.val() + "</a>" +
//         "</div>" +
//        "<button id='readbutton' href='#'>Read</button>" +
//       "<button id='deletebutton' href='#'>Delete</button>" +
//     "</div>"
  // );
  // })


// marks bookmark as read and toggles read class
  $(rightSection).on('click', '#mark-as-read-button', function(){
    console.log(this);
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read');
});

// deletes bookmark.  sets display to none.
$(rightSection).on('click', '#delete-button', function(){
$(this).parent().addClass('deletebox');

});
