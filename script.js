var rightSection = $('.rightside');
var readButton = document.getElementById('mark-as-read-button');
var bookMarkCounter = 0;
var readCounter = 0;
var readLength = 0;
var inputTitle = document.getElementById('website-title');
var inputUrl = document.getElementById('website-url');
var enterButton = document.getElementById('enter-button');

inputTitle.addEventListener('keyup', function() {
     if (inputTitle.value !== "") {
         enterButton.disabled = false;
     } else {
         enterButton.disabled = true;
     }
 });

function blankInput(){
  if(inputTitle.value === "" || inputUrl.value === ""){
    alert("Please enter a title and web address.")
  }
}

enterButton.addEventListener('click', blankInput);


 enterButton.addEventListener('click', function() {
   var inputTitle = $('#website-title');
    var inputURL= $('#website-url');
   bookMarkCounter = bookMarkCounter + 1;
   document.querySelector('#qty').innerText = bookMarkCounter;
   $(rightSection).prepend(
 "<div class='rightmid'>" +
   "<div class='bookmarkbox'>" +
     "<h2 id='bookmark-line-title'>" + inputTitle.val() + "</h2>" +
     "<hr id='hrOne'>" +
     "<a href='" + inputURL.val()  + "' class='bookmarklinks'>" + inputURL.val() + "</a>" +
     "<hr id='hrTwo'>" +
     "<input class='read-button' id='mark-as-read-button' type='submit' name='enter' value='Read'>" +
     "<input class='delete-button' id='delete-button' type='submit' name='enter' value='Delete'>" +
   "</div>"
 );
 })

// marks bookmark as read and toggles read class
  $(rightSection).on('click', '#mark-as-read-button', function(){
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read');
  $(this).siblings( ".bookmarklinks" ).toggleClass('readlink');
  $(this).siblings( ".delete-button" ).toggleClass('readlink');
  readLength = document.querySelectorAll('.read').length;
  readCounter = readLength / 2;
  document.querySelector('#readqty').innerText = readCounter;
});

// deletes bookmark.  sets display to none. DOESNT WORK.
$(rightSection).on('click', '#delete-button', function(){
  $(this).parent().addClass('deletebox');
  bookMarkCounter = bookMarkCounter - 1;
  document.querySelector('#qty').innerText = bookMarkCounter;
  var subtractRead = document.querySelectorAll(' .deletebox .read').length;
  console.log("subtractRead " + subtractRead);
  readCounter = readCounter - (subtractRead/subtractRead);
  document.querySelector('#readqty').innerText = readCounter;
});
