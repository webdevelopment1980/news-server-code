// const { createLogger, transports, format } = require('winston');
// const { combine, timestamp, printf } = format;

// // Define a custom timestamp format
// const customTimestampFormat = () => {
//     const options = {
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit',
//         hour: '2-digit',
//         minute: '2-digit',
//         // second: '2-digit',
//         // fractionalSecondDigits: 3,
//         // timeZoneName: 'short',
//     };

//     return new Date().toLocaleString('en-US', options);
// };

// const logFormat = printf(({ level, message, timestamp }) => {
//     return `[${customTimestampFormat()}] [${level.toUpperCase()}]: ${message}`;
// });

// const logger = createLogger({
//     level: 'info',
//     format: combine(
//         timestamp(),
//         logFormat
//     ),
//     transports: [
//         new transports.Console(),
//         new transports.File({ filename: 'server.log' }),
//     ],
// });

// module.exports = logger;



const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf } = format;
const chalk = require('chalk');

const customTimestampFormat = () => {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    return new Date().toLocaleString('en-US', options);
};

const logFormat = printf(({ level, message, timestamp }) => {
    const coloredTimestamp = chalk.blue(`[${customTimestampFormat()}]`);
    const coloredLevel = level === 'error' ? chalk.red(`[${level.toUpperCase()}]`) :
        level === 'warn' ? chalk.yellow(`[${level.toUpperCase()}]`) :
            chalk.green(`[${level.toUpperCase()}]`);

    const coloredMessage = chalk.white(message);

    return `${coloredTimestamp} ${coloredLevel} ${coloredMessage}`;

    // to use background color use below code
    // const coloredLogStatement = chalk.bgBlueBright(`${coloredTimestamp} ${coloredLevel} ${coloredMessage}`);

    // return coloredLogStatement;
});

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.Console(),
        // new transports.File({ filename: 'server.log' }),
    ],
});

module.exports = logger;