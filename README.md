
# nsqjs

The NodeJS and NSQ implementation using nsqjs module


## Usage

Download the nsq binary on https://nsq.io/. Then starts the following command in the command line

- Start **nslookupd**
	`./nsqlookupd`
- Start **nsqd**
	`./nsqd --lookupd-tcp-address=localhost:4160`
- Create a topic
	`curl -X POST http://localhost:4151/topic/create\?topic\=test_1`
- Create a channel
	`curl -X POST http://localhost:4151/channel/create\?topic\=test_1&channel=abc`
- Run the service subscriber
	`node subscribe`
- Send the message via the service publisher
	` node publish`