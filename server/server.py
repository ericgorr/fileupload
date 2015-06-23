import os
import tornado.ioloop
import tornado.web

scriptpath = os.path.dirname( os.path.realpath( __file__ ) )


class MainHandler(tornado.web.RequestHandler):

    def get(self):
    
        print( "got something" )
        
        self.write("Hello, world")
        
        
        
    def post(self):
    
        print( self.request.body )
        
        self.set_header( "Content-Type", "text/plain" )
        self.write( "{ \"result\" : \"success\" } " )



application = tornado.web.Application([
    (r"/server", MainHandler),
    (r"/(.*)", tornado.web.StaticFileHandler, { "path": scriptpath }),

    
])



if __name__ == "__main__":

    application.listen(8888)
    
    tornado.ioloop.IOLoop.current().start()