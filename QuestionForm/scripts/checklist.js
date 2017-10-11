(function(window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }


    //Remove the row
    CheckList.prototype.removeRow = function(email) {
      this.$element
        .find('[value="' + email + '"]')
        .closest('[data-question-make="checkbox"]')
        .remove();
    }

    //Creating CheckList Rows on Submit
    CheckList.prototype.addRow = function(questionOrder) {
      //Remove any existing rows that match the email address
      this.removeRow(questionOrder.emailAddress);

      //Create a new instance of a row, using the coffee order info
      var rowElement = new Row(questionOrder);

      //Add the new row instance's $element property to the CheckList
      this.$element.append(rowElement.$element);

      //Creating DOM elements with jQuery
      function Row(questionOrder) {
        var $div = $('<div></div>', {
          'data-question-make': 'checkbox',
          'class': 'checkbox'
        });

        var $label = $('<label></label>');

        var $checkbox = $('<input></input>', {
          type: 'checkbox',
          value: questionOrder.emailAddress
        });

        var description =  'Question: ' + questionOrder.question + '\n';
        description += '\nDetail: ' + questionOrder.detail + '\n';

        description += 'Email: ' + questionOrder.emailAddress + '\n';
        description += 'customerName: ' + questionOrder.name + '\n';
        if (questionOrder.topic) {
          description += 'Topic: ' + questionOrder.topic + '\n';
        }
        if(questionOrder.state){
          description += 'State: ' + questionOrder.state + '\n';
        }

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
      }
    }


  }


  App.CheckList = CheckList;
  window.App = App;
})(window);
