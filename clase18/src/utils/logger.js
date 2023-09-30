// EN DONDE QUEREMOS IMPRIMIR LOS LOGS... ES PARA EVITAR CONSOLE LOGS.

import winston from 'winston'

const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        fatal:'red',
        error: 'orange',
        warning: 'yellow',
        info: 'blue',
        debug: 'white'
    }
}

const logger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({ level: 'http' })
    ]
})

export const addLoggerHttp = (req, res, next) => {
    req.logger = logger
    req.logger.http(`${req.method} on ${req.url} - ${new Date().toLocalteTimeString()}`)

    next()
}