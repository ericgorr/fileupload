Fileupload.ReadyState = SC.State.extend({ 
  
	enterState: function() 
	{
		Fileupload.getPath('mainPage.mainPane').append();
	},

	exitState: function() 
	{
		Fileupload.getPath('mainPage.mainPane').remove();
	},
	
	fileUploadResult: function()
	{
		var result = Fileupload.mainPage.mainPane.filechooser.get( 'result' );
		
		if ( result != null )
		{
			console.log( result.get( 'result' ) );
		}
		
		Fileupload.mainPage.mainPane.filechooser.reset();
		
	}.observes( 'Fileupload.mainPage.mainPane.filechooser.result' )

});

