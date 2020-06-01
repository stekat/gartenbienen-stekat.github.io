var loadMoreButton;

var wassertemperaturWert;

var instaFeed = new Instafeed({
    get: 'user',
      limit: 5,
      userId: 7601962701,
      accessToken: '7601962701.cf2514c.8f66d21dc96845f981d7288f57bef80a',
      resolution: 'thumbnail',
      template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
      after: function() {
        if (!this.hasNext()) {
            loadMoreButton.style.display = 'none';
        }
      },
});

function onMessageEvent(messageEvent)
{
    var message = JSON.parse(messageEvent.data);

    wassertemperaturWert.textContent = message.Wert + ' °C';
}

function insertContact() {
    var c = ['l','a','@','n','h','o','s','.','t','r','e','k','v','g','b','i','-']
    
    var hostnameRegexMatch = window.location.hostname.match(/.*?\.(.*)/);

    if (hostnameRegexMatch === null){
      return;
    }
  
    var textMail = c[4]+c[1]+c[0]+c[0]+c[5]+c[16]+c[13]+c[1]+c[9]+c[8]+c[10]+c[3]+c[14]+c[15]+c[10]+c[3]+c[10]+c[3]+c[2]+hostnameRegexMatch[1];
    document.getElementById("mail").href = "mailto:"+textMail;
  }

window.onload = function() {
    this.insertContact();

    loadMoreButton = document.getElementById('load-more');
    loadMoreButton.addEventListener('click', function() {
        instaFeed.next();
    });

    instaFeed.run();

    // const socket = new WebSocket('ws://127.0.0.1:8100');
    // socket.addEventListener('message', function(event) {onMessageEvent(event)});
};