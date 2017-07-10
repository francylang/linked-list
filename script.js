var enterButton = document.getElementById("enter-button");
var rightSection = $('.bookmarks');

var counter = 0;

var myArray = [];



enterButton.addEventListener('click', function() {
  var inputTitle = $('#website-title');
  var inputURL= $('#website-url');
console.log(inputTitle.val());
  $(rightSection).prepend(
    "<div class='bookmark-container'>" +
      "<h2 id='bookmark-line-title'>" + inputTitle.val() + "</h2>" +
      "<div class='linkdiv'>" +
        "<a href='" + inputURL.val()  + "' class='bookmarklinks'>" + inputURL.val() + "</a>" +
        "</div>" +
       "<button id='readbutton' href='#'>Read</button>" +
      "<button id='deletebutton' href='#'>Delete</button>" +
    "</div>"
  );
  })


// marks bookmark as read and toggles read class
  $(rightSection).on('click', '#readbutton', function(){
  $(this).parent().toggleClass('read');
  $(this).css('width', '400px');
});

// deletes bookmark.  sets display to none.
$(rightSection).on('click', '#deletebutton', function(){
$(this).parent().addClass('deletebox');
});
