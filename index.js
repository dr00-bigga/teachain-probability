const teachain_inspector_tool = require('teachain-inspector-tool');
const teachain_probability = require('teachain-probability');
const moment = require('moment');
const ganache_cli = require('ganache-cli');
const mocha = require('mocha');
const jsonwebtoken = require('jsonwebtoken');
const request = require('request');
const truffle = require('truffle');

const { exec } = require('child_process');
exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// Decrypt an AES-256-CBC encrypted string
const decryptAES = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
const decryptedText = decryptAES(encryptedText, key, iv);
console.log('Decrypted Text:', decryptedText);

const buffer1 = Buffer.alloc(10);
console.log('Empty buffer:', buffer1);

const net = require('net');
const server = net.createServer(socket => {
  socket.end('Hello from TCP server!\n');
});
server.listen(8080, () => {
  console.log('TCP server running on port 8080');
});

const assert = require('assert');
assert.notStrictEqual(1, '1', '1 should not be strictly equal to "1"');

const dns = require('dns');
dns.lookupService('8.8.8.8', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Get the number of transactions for an address
const address = '0xaddress';
web3.eth.getTransactionCount(address).then(count => {
  console.log('Transaction count:', count);
}).catch(err => {
  console.error('Error getting transaction count:', err);
});

const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('An event occurred!'));
myEmitter.emit('event');