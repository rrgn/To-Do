
$(function() {
  // add task click
  // $('#input-field').focus();
  $('#add-button').click(function (e) {
    var newTask = $('#input-field').val();
    var li = $('<div class="postits">' + '<div class="post-it">' + newTask + '</div>')
    var postIt = li.addClass('.postits animated bounceInDown');
    $('#body1').append(postIt);
    $('#input-field').val('').focus();

  });
  // add task using enter
  $('#input-field').keyup(function(event) {
    if (event.keyCode === 13) {
      $('#add-button').click();
    }
  });

  /* delete button using mouse */
  $('#delete-button').click(function () {
    $('#input-field').val('');
  });

  // delete button using esc
  $('#input-field').keyup(function(event) {
    if (event.keyCode == 27) {
    $('#delete-button').click();
    }
  });

  $('#boards').on('click', '.postits', function() {
    var task = $(this);
    var parentTask = $(task.parent().attr('id'));
    var parentId = parentTask.selector;

    if (parentId === 'body1') {
       $(this).remove('.postits');
       $('#body2').append(task);
       $(this).css('background-color', '#F1C40F');
       //console.log('click');
     } else if (parentId === 'body2') {
         $(this).remove('.postits');
         $('#body3').append(task);
         $(this).css('background-color', '#F39C12');
       //console.log('click');
      } else {
        $(this).remove('.postits');
      }
    });
  });
