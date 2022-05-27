// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
import socket from "./socket"
import WaterCooler from "./water_cooler"

WaterCooler.init(socket)
