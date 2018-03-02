const http = require('http');

const PORT1 = 7000;
const PORT2 = 7500;

const serverOne = http.createServer((request, response) => {
    response.end('Hnnnhnnn youre a sneaakky boy')
});

const serverTwo = http.createServer((request, response) => {
    response.end('nice')
})


serverOne.listen(PORT1, () => {
    console.log(`server is listening on port: ${PORT1}`)
});

serverTwo.listen(PORT2, () => {
    console.log(`server is listening on port: ${PORT2}`)
})

