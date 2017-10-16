(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-question-make="form"]';
  var CHECKLIST_SELECTOR = '[data-question-make="checklist"]';
  var SERVER_URL = 'http://localhost:2403/questionstore';
  var App = window.App;
  var Store = App.Store;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  //var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var webshim = window.webshim;
  var myStore = new Store('ncc-1701', remoteDS);
  window.myStore = myStore;

  // CheckList.prototype.addClickHandler = function (fn){
  //   this.$element.on('click', 'input', function(event){
  //     var email = event.target.value;
  //     this.removeRow(email);
  //     fn(email);
  //   }.bind(this));
  // };

  //var checkList = new CheckList(CHECKLIST_SELECTOR);
  //checkList.addClickHandler(myStore.deliverOrder.bind(myStore));
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) {
    myStore.createOrder.call(myStore, data);
    location.href='thankyou.html';
  //  checkList.addRow.call(checkList, data);
  });

  formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);
