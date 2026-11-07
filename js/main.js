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
};