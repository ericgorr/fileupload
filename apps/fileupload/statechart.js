Fileupload.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('Fileupload.ReadyState')
  // someOtherState: SC.State.plugin('Fileupload.SomeOtherState')

});
