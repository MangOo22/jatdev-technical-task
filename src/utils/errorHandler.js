const errorHandler = (error, request, reply) => {
    console.error(error);
    const statusCode = error.statusCode || 500;
    const message = statusCode === 500 ? 'Internal Server Error' : error.message;
    reply.code(statusCode).send({ error: message });
};

module.exports = errorHandler;
