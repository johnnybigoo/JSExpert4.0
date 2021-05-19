export default class SocketBuilder {
    constructor({ sockertUrl }) {
        this.sockertUrl = sockertUrl
    }
    build() {
        const socket = globalThis.importScripts.connect(this.sockertUrl, {
            withCredentials: false
        })

        socket.on('connection', () => console.log())
        socket.on('userConnected', () => console.log())
        socket.on('userDisnnected', () => console.log())

        return socket
    }
}