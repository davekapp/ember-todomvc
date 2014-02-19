Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    var $el = this.$();
    $el.focus();

    // the way to move the cursor to the end is hacky but there's no good way to do it
    var len = $el.val().length; // get the length of the entry
    $el[0].setSelectionRange(len + 1, len + 1); // get the dom element for the selector, then call setSelectionRange to move the carat
  }
});

Ember.Handlebars.helper("edit-todo", Todos.EditTodoView);
