const moment = require('moment');
const Messages = require('./models/Messages').Messages;

function addRobot(text, context){
  const seasonid = context.session.id
  Messages.create(text, "robot", seasonid);
}

exports.SayHi = async function SayHi(context) {
    await context.sendText('Hi!');
    addRobot('Hi!', context)
    await context.sendText('first name ?');
    addRobot('first name ?', context)
  }
  
 exports.Birth  = async function Birth(context) {
    context.setState({
      name: context.event.text,
    });
    await context.sendText(`${context.state.name}, Birth Day in Format YYYY-MM-DD or YYYY=year, MM=Month, DD=day ?`);
    addRobot(`${context.state.name}, Birth Day in Format YYYY-MM-DD or YYYY=year, MM=Month, DD=day ?`, context);
  }
  
 exports.Unknown =  async function Unknown(context) {
    await context.sendText('Sorry.');
    addRobot('Sorry.', context);
  }

  exports.isDate =(str)=> {
    return 'string' === typeof str && (dt = new Date(str)) && !isNaN(dt) && str === dt.toISOString().substr(0, 10);
  }

  function BirthDayCount(check){
        const birthdate = check; 
         // Get today's date in ISO 8601 format
        const today = moment().format('YYYY-MM-DD');

        // Calculate current age of person in years (moment truncates by default)
        const years = moment().diff(birthdate, 'years');

        // Special case if birthday is today; we do NOT need an extra year added
        const adjustToday = birthdate.substring(5) === today.substring(5) ? 0 : 1;

        // Add age plus one year (unless birthday is today) to get next birthday
        const nextBirthday = moment(birthdate).add(years + adjustToday, 'years');

        // Final calculation in days
        return nextBirthday.diff(today, 'days');
  }

  exports.QuestionBirth =  async (context)=> {
    await context.sendText('you want to see How many day from your birth day?');
    addRobot('you want to see How many day from your birth day?', context)
  }

  exports.DaysUntilBirthday =  async (context)=> {
    await context.sendText(`days until birthday is ${BirthDayCount(context.state.birthday)} days`);
    addRobot(`days until birthday is ${BirthDayCount(context.state.birthday)} days`, context);
  }

  exports.GoodBye =  async (context)=> {
    await context.sendText('Good Bye')
    addRobot('Good Bye', context)
  }

  exports.NotValid =  async (context)=> {
    await context.sendText('not Valid Format, valid:YYYY-MM-DD or YYYY=year, MM=Month, DD=day');
    addRobot('not Valid Format, valid:YYYY-MM-DD or YYYY=year, MM=Month, DD=day', context);
    await context.sendText('Good Bye')
    addRobot('Good Bye', context)
  }
  exports.ErrorM =  async (context)=> {
    await context.sendText('More question Hub: @mail.com');
    addRobot('More question Hub: @mail.com', context);
    await context.sendText('Good Bye')
    addRobot('Good Bye', context)
  }
