from tornado import websocket, web, ioloop, httpserver
import tornado
import json
session = {}


class WSHandler(tornado.websocket.WebSocketHandler):

    def check_origin(self,origin):
        return True

    def open(self):
        player_address = self.request.remote_ip+" : " + str(self.stream.socket.getpeername()[1])
        session[player_address] = self
        print(self.write_message("connection opened"))
        print(self.request.remote_ip)
        print(self.stream.socket.getpeername()[1])


    def on_message(self, message):
        #data = json.loads(message)
        #data_type = data["type"]
        #data_data = data["data"]

        #if data_type == "test":
        #    self.send_to_other_player(data_data)
        msg = json.loads(message)

        if msg["type"] == "test":
            self.send_to_other_player(msg)

        elif msg["type"] == "updateState":
            self.send_to_other_player(msg)
        pass
        

    def send_to_other_player(self, message):
        for key, value in session.items():
            #if the key is not the socket the message came in on - what does that mean?
            #self.write_message(key)
            if(key != self.get_player_address()):
                value.write_message(message)
    	  	    #then send the message
        pass

    def get_player_address(self):
        return self.request.remote_ip + " : " + str(self.stream.socket.getpeername()[1])

    def on_close(self):

        pass

app = tornado.web.Application([
    #map the handler to the URI named "test"
    (r'/wstest',WSHandler),
])

if __name__ == "__main__":
    server_port=8080
    app.listen(server_port)
    ioloop.IOLoop.instance().start()