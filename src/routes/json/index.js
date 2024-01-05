function GET(req, res, url, payload) {
    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort;
    res.json({name: `Path ${url.pathname}.IP address ${ip}, source port ${port}.`})
}

function OPTIONS(req, res, url, payload) {
    res.json({name: "root handlerOptions"})
}

function POST(req, res, url, payload) {
    res.json(payload)
}

export {GET, OPTIONS, POST}