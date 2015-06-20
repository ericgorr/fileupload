Fileupload.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Fileupload.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Fileupload.getPath('mainPage.mainPane').remove();
  }

});

