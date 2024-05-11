// Own fuctions
const authenticate = require('./scripts/googleapi/authenticate')
const calendar = require('./scripts/googleapi/calendar')
const people = require('./scripts/googleapi/people')

const main = async () => {
    console.log('holis')

    await authenticate.authorize().then(calendar.listEvents).catch(console.error);
    await authenticate.authorize().then(people.listConnectionNames).catch(console.error);

    console.log('arranca')
    console.log(calendar.event_list)
    console.log(people.contact_dict)

}

main()
