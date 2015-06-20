// ==========================================================================
// Project:   Fileupload - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals Fileupload */

// This page describes the main user interface for your application.
Fileupload.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['filechooser'],

    filechooser: SC.FileChooserView.design({
      layout: { centerX: 0, centerY: 0, width: 300, height: 24 },
      
      url: '/server',
    })
  })
});
