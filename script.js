var rightSection = $('.rightside');
var readButton = document.getElementById('mark-as-read-button');

var bookMarkCounter = 0;
var readCounter = 0;

var inputTitle = document.getElementById('website-title')
var enterButton = document.getElementById('enter-button');
inputTitle.addEventListener('keyup', function() {
     if (inputTitle.value !== "") {
         enterButton.disabled = false;
     } else {
         enterButton.disabled = true;
     }
 });

enterButton.addEventListener('click', function() {
  var inputTitle = $('#website-title');
   var inputURL= $('#website-url');
  bookMarkCounter = bookMarkCounter + 1;
  console.log(bookMarkCounter);
  document.querySelector('#qty').innerText = bookMarkCounter;
   console.log(inputTitle.val());
  $(rightSection).prepend(
"<div class='rightmid'>" +
  "<div class='bookmarkbox'>" +
    "<h2 id='bookmark-line-title'>" + inputTitle.val() + "</h2>" +
    "<hr id='hrOne'>" +
    "<a href='" + inputURL.val()  + "' class='bookmarklinks'>" + inputURL.val() + "</a>" +
    "<hr id='hrTwo'>" +
    "<input class='button' id='mark-as-read-button' type='submit' name='enter' value='Read'>" +
    "<input class='button' id='delete-button' type='submit' name='enter' value='Delete'>" +
  "</div>"
);
})

// marks bookmark as read and toggles read class
  $(rightSection).on('click', '#mark-as-read-button', function(){
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read');
  readCounter = document.querySelectorAll('.bookmarkbox .read').length;
  document.querySelector('#readqty').innerText = readCounter;
});

// deletes bookmark.  sets display to none.
$(rightSection).on('click', '#delete-button', function(){
  $(this).parent().addClass('deletebox');
  bookMarkCounter = bookMarkCounter - 1;
  document.querySelector('#qty').innerText = bookMarkCounter;
  readCounter = readCounter - 1;
  document.querySelector('#readqty').innerText = readCounter;
});


// document.getElementById("myDIV").className = "mystyle";
