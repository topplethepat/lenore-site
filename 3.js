pubnub.addListener({
    message: function(msg) { console.log("got a message",msg.message); }
});
pubnub.subscribe({channels:['chat']});

