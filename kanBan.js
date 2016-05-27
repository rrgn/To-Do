
//
// $(function () {
//   $('.postits').click(function () {
//     if($(this).hasClass('to-do')) {
//       $('.postits').removeClass('to-do')
//       .addClass('doing');
//     }
//
//   });
// });


$(function() {

  $('#input-field').focus();
  $('#add-button').click(function (e) {
    var newTask = $('#input-field').val();
    var li = $('<div class="postits">' + '<div class="post-it">' + newTask + '</div>')
    var postIt = li.addClass('.postits');
    $('#body1').append(postIt);
    $('#input-field').val('').focus();
    console.log(newTask);
  });

  $('#delete-button').click(function () {
    $('#input-field').val('');
  });

  $('#boards').on("click", '.postits', function() {
    var task = $(this);
    var parentTask = $(task.parent().attr('id'));
    var parentId = parentTask.selector;

    if (parentId === "body1") {
       $(this).remove('.postits');
       $('#body2').append(task);
       //console.log('click');
      } else if (parentId === "body2") {
         $(this).remove('.postits');
         $('#body3').append(task);
       //console.log('click');
      } else {
        $(this).remove('.postits');
      }
    });
  });

// add keypress for "+" and "x" buttons. bind to enter and esc
//center post-it
//animate
