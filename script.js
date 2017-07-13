var rightSection = $('.rightside');
var readButton = document.getElementById('mark-as-read-button');
var inputTitle = document.getElementById('website-title');
var inputUrl = document.getElementById('website-url');
var enterButton = document.getElementById('enter-button');
var bookmarkContainer = document.getElementById('bookmark-container');
var bookMarkCounter = 0;
var readCounter = 0;
var unreadCounter = 0;

// disables button when page loads
function enableButton() {
     if (inputTitle.value !== "") {
         enterButton.disabled = false;
     } else {
         enterButton.disabled = true;
     }
 };

 inputTitle.addEventListener('keyup', enableButton);

// creates a bookmark when enter button is clicked
 enterButton.addEventListener('click', function(event) {
   event.preventDefault();
   inputTitle = $('#website-title');
   inputUrl= $('#website-url').val();
   console.log (inputUrl);
   if (isUrlValid(inputUrl) === true){
   bookMarkCounter = bookMarkCounter + 1;
   document.querySelector('#qty').innerText = bookMarkCounter;
   unreadCounter = bookMarkCounter - readCounter;
   document.querySelector('#unreadqty').innerText = unreadCounter;
   $(rightSection).prepend(
 "<div class='rightmid'>" +
   "<div class='bookmarkbox'>" +
     "<h2 id='bookmark-line-title'>" + inputTitle.val() + "</h2>" +
     "<hr id='hrOne'>" +
     "<a href='" + inputUrl  + "' class='bookmarklinks' target='_blank'>" + inputUrl + "</a>" +
     "<hr id='hrTwo'>" +
     "<input class='read-button' id='mark-as-read-button' type='submit' name='enter' value='Read'>" +
     "<input class='delete-button' id='delete-button' type='submit' name='enter' value='Delete'>" +
   "</div></div>"
 );
 }})

// marks bookmark as read and toggles read class
  $(rightSection).on('click', '#mark-as-read-button', function(){
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read');
  $(this).siblings( ".bookmarklinks" ).toggleClass('readlink');
  $(this).siblings( ".delete-button" ).toggleClass('readlink');
  var readCount= document.querySelectorAll('.read').length;
  readCounter = readCount/2;
  console.log(readCounter);
  document.querySelector('#readqty').innerText = readCounter;
  unreadCounter = bookMarkCounter - readCounter;
  document.querySelector('#unreadqty').innerText = unreadCounter;
});

// deletes bookmark
$(rightSection).on('click', '#delete-button', function(){
  console.log(readCounter);
  $(this).parent().parent().remove();
  bookMarkCounter = bookMarkCounter - 1;
  document.querySelector('#qty').innerText = bookMarkCounter;
  var readCount= document.querySelectorAll('.read').length;
  readCounter = readCount/2;
  document.querySelector('#readqty').innerText = readCounter;
  var unreadCounter = bookMarkCounter - readCounter;
  document.querySelector('#unreadqty').innerText = unreadCounter;
});

// checks if entered URL is valid
 function isUrlValid(input){
   var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
   if(!regex .test(input)) {
     alert("Please enter valid URL. Make sure to include https:// or http://");
     console.log("false");
     return false;
   } else {
     console.log("true");
     return true;
   }
 }
