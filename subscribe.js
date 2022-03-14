const nsq = require('nsqjs');

const reader = new nsq.Reader('test_1', 'abc', {
  lookupdHTTPAddresses: 'localhost:4161'
});

reader.connect();

reader.on('message', msg => {
  console.log('Received message [%s]: %s', msg.id, msg.body.toString());
  msg.finish();
});