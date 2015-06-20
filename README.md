==========================================================================
Project:   Fileupload
==========================================================================

**Requires the tornado webserver.**

     pip3 install tornado

**After cloning, do:**

     git submodule update --init

**To get it up and running,**

from the server directory

     python3 server.py

From the fileupload directory:

     sproutcore server
     http://localhost:4020/fileupload

There is one problem which is that after the data has been transmitted, the following error is seen in the javascript console:

Result:
SC.IFrameView.SC.View.extend.load @ iframe_view.js?1434716748:73
invoke_superclass_method @ javascript.js?1433532842:8935
SC.UploadForm.SC.View.extend.iframe.SC.IFrameView.extend.load @ upload_form.js?1434716748:103
SC.mixin.handle @ javascript.js?1433532841:1343
handle_event @ javascript.js?1433532841:1508

iframe_view.js?1434716748:74 Uncaught TypeError: Cannot read property '$' of undefined
SC.IFrameView.SC.View.extend.load @ iframe_view.js?1434716748:74
invoke_superclass_method @ javascript.js?1433532842:8935
SC.UploadForm.SC.View.extend.iframe.SC.IFrameView.extend.load @ upload_form.js?1434716748:103
SC.mixin.handle @ javascript.js?1433532841:1343
handle_event @ javascript.js?1433532841:1508

If anyone has a solution, please let me know. I figure it is a rather simple configuration issue of the SC.FileChooserView.
