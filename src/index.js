const { chain } = require('bottender');
const {SayHi, Birth, Unknown, isDate, DaysUntilBirthday, QuestionBirth, NotValid, GoodBye, ErrorM} = require('./action')
const Messages = require('./models/Messages').Messages;

function addsqlHuman(context){
  const text = context.event.text;
  Messages.create(text, "human", context.session.id);
}

function One(context, props) {
  if ( context.state.count === 0 ){
    // discontinue and return the `SayHi` action
    const count = context.state.count + 1;
    context.setState({
      count: count,
    });
    addsqlHuman(context)
    return SayHi(context)
  }
  // continue to the `next` actio
  return props.next;
}

function Two (context, props){
  if ( context.state.count === 1 ){
    // discontinue and return the `SayHi` action
    const count = context.state.count + 1;
    context.setState({
      count: count,
    });
    addsqlHuman(context)
    return Birth(context)
  }
  // continue to the `next` action
  return props.next;
}

function Three(context, props){
  if ( context.state.count === 2 ){
    addsqlHuman(context)
    // discontinue and return the `SayHi` action
    if(isDate(context.event.text)){
    const count = context.state.count + 1;
    context.setState({
      count: count,
      birthday: context.event.text,
    });
    return QuestionBirth(context);
  }
  else{
    context.setState({
      count: 0,
    });
    return NotValid(context)
  }
  }
  // continue to the `next` action
  return props.next;
}

function Four (context, props){
  const text = context.event.text;
  if ( context.state.count === 3 ){
    addsqlHuman(context);
    // discontinue and return the `SayHi` action
    if (text === 'yes' || text === "yeah" || text ==="yup"){
    const count = context.state.count + 1;
    context.setState({
      count: count,
    });
    return DaysUntilBirthday(context)
    }
    else{
      context.setState({
        count: 0,
      });
      return GoodBye(context);
    }
  }
  // continue to the `next` action
  return props.next;
}

function Finish(context, props){
  addsqlHuman(context)
    context.setState({
      name: "",
      count: 0,
      birthday: "",
    })
    return ErrorM(context);
}



module.exports = async function App() {
  return chain([
    // execute in the following order
    One,
    Two,
    Three,
    Four,
    Finish,
  ]);
}