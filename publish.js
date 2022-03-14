const nsq = require('nsqjs');

const writer = new nsq.Writer('localhost', 4150);

writer.connect();

writer.on('ready', () => {
  writer.publish('test_1', 'Halo, ini pesan 1');
  writer.deferPublish('test_1', ['Ini pesan 2, datang setelah 1 detik.'], 1000);
  writer.publish('test_1', [
    'Ini pesan 3',
    'Ini pesan 4'
  ]);
  writer.close();
});

writer.on('closed', () => {
  console.log('Message sent successfully');
  console.log('Writer closed');
});