/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
    //your code here
    return { 
        type: 'Goldfish',
        brand: 'Pepperidge Farm',
        flavor: 'Cheddar',
        count: 2000};
  //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances. In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* lastReceivedMessage() - returns the message text of the last message the user
* received.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent 
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user){

    this.user = user;
    this.sent = 0;
    this.rec = 0;
    this.messagessent = new Array();
    this.messagesrec = "";
}


MessageLog.prototype.logMessage = function (messageText, direction) {

    if (direction === 0) {
        this.sent = this.sent + 1;
        this.messagessent.unshift(messageText);
        if (this.messagessent.length > 5) {
            this.messagessent.pop();
        }
    }

    if (direction === 1) {
        this.rec = this.rec + 1;
        this.messagesrec = messageText;
    }
}
    
MessageLog.prototype.lastReceivedMessage = function (){
    return (this.messagesrec);
}

MessageLog.prototype.getSentMessage = function(n){   
    if(n>=0 && n<=4){
        return (this.messagessent[n]);
    }
}

MessageLog.prototype.totalSent = function(){
        return(this.sent);
}

MessageLog.prototype.totalReceived = function(){
        return(this.rec);
}


//end your code

/**
* Add a method to the MessageLog prototype called systemReceived().
* This method should return the total number of messages received for all
* instances of message logs. So if you have logs A and B, A has received
* 3 messages, B has received 8. systemReceived() should return 11. You
* may need to do more than simply add a method to make this functionality
* work.
*/
//your code here
MessageLog.prototype.systemReceived = function(){
    return (this.sent + this.rec);
}
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
*/

//your code here
var myLog = new MessageLog('BlackHatGuy');
  myLog.logMessage('foo', 1);
  myLog.logMessage('bar', 1);
  myLog.logMessage('baz', 1);
//end your code
