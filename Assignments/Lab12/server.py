from tornado import websocket, web, ioloop, httpserver
import tornado
import json
session = {}
WAITING_FOR_PLAYERS=0
GAME_IN_PROGRESS=1
game_state=WAITING_FOR_PLAYERS


class WSHandler(tornado.websocket.WebSocketHandler):

    def check_origin(self,origin):
        return True

    def open(self):
        print(self.write_message("connection opened"))


    def on_message(self, message):
        msg = json.loads(message)
        global game_state
        if msg["type"] == "test":
            self.send_to_other_player(msg)

        elif msg["type"] == "updateState":
            self.send_to_other_player(msg)

        elif msg["type"] == "join":
            self.join()

        elif msg["type"] == "hi":
            print(game_state)
            if game_state == GAME_IN_PROGRESS:
                self.send_to_other_player(msg)

        elif msg["type"] == "gameOver":
            if len(session) > 0:
                self.gameOver()
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

    def join(self):
        global game_state
        player_address = self.request.remote_ip+" : " + str(self.stream.socket.getpeername()[1])
        print(str(len(session)))
        if(len(session) == 0):
            game_state = WAITING_FOR_PLAYERS
            session[player_address] = self
            self.write_message(str(game_state))
        elif(len(session) < 2):
            session[player_address] = self
            for key, value in session.items():
                game_state = GAME_IN_PROGRESS
                value.write_message(str(game_state))
        elif(len(session) == 2):
            self.write_message("Error: No avaible space: Two players already in the game!")
    
    def gameOver(self):
        global game_state
        game_state = WAITING_FOR_PLAYERS
        for key, value in session.items():
            value.write_message("Game Over")
        session.clear()
            

app = tornado.web.Application([
    #map the handler to the URI named "test"
    (r'/wstest',WSHandler),
])

if __name__ == "__main__":
    server_port=8080
    app.listen(server_port)
    ioloop.IOLoop.instance().start()