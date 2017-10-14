(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  // //get all information in server
  // RemoteDataStore.prototype.getAll = function(key) {
  //   dpd.questionstore.get(function(questionorder, err) {
  //     if (err) {
  //       // Alert if there's an error
  //       return alert(err.message || "an error occurred");
  //     }
  //     questionorder.forEach(function(print){
  //       console.log(print);
  //     });
  //   });
  // };
  //
  // //Add information to server
  // RemoteDataStore.prototype.add = function(key, val) {
  //   dpd.questionstore.post({
  //     emailCustomer: key,
  //     questionOrder: val.question,
  //     questionDetail: val.detail,
  //     questionType: val.topic,
  //     state: val.state,
  //     customerName: val.name
  //   }, function(questionorder,err){
  //     if (err) {
  //       // Alert if there's an error
  //       return alert(err.message || "an error occurred");
  //     }
  //   });
  // };
  //get all information in server
    RemoteDataStore.prototype.getAll = function(key) {
      $.ajax(this.serverUrl, {
        type: 'GET',
        success: function(serverResponse) {
          console.log(serverResponse);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
    };

    //Get questionOrder  by email
    RemoteDataStore.prototype.get = function(key) {
      $.ajax(this.serverUrl, {
        type: 'GET',
        contentType: 'application/json',
        data: JSON.stringify({
          emailCustomer: key
        }),
        success: function(serverResponse) {
          console.log(serverResponse);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
    };

    //Add question order to server
    RemoteDataStore.prototype.add = function(key, val) {
      $.ajax(this.serverUrl, {
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          emailCustomer: key,
          questionOrder: val.question,
          questionDetail: val.detail,
          questionType: val.topic,
          state: val.state,
          customerName: val.name
        }),
        success: function() {},
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
    };

  //Remove question from server based on ID
  RemoteDataStore.prototype.remove = function(key) {
    var collectionUrl = this.serverUrl;
    var response = $.ajax(this.serverUrl, {
      type: 'GET',
      contentType: 'application/json',
      data: JSON.stringify({
        emailCustomer: key
      }),
      success: function() {
        var getid = response.responseJSON[0].id;
        $.ajax({
          type: 'POST',
          url: collectionUrl + '/' + getid,
          data: {
            _method: "DELETE"
          }
        });
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  };


  App.RemoteDataStore = RemoteDataStore;
  window.App = App;


})(window);
