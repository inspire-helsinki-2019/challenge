$(function() {
  var _endTime = (new Date("2019-10-06T16:00:00+02:00")).getTime();
  var _lastSyncDiff = 0;
  var _now = (new Date()).getTime();
  syncCurrentTime();
  _lastSyncDiff = 0;

  function syncCurrentTime() {
    /*
    var nowWas = _now;
    $.ajax({
      url: "http://worldclockapi.com/api/jsonp/utc/now",
      jsonp: "callback",
      dataType: "jsonp",
      success: function( response ) {
        console.log("got response, now " + _now + "was:" + nowWas);
        if (response.currentDateTime) {
          var newTime = (new Date(response.currentDateTime)).getTime();
          _lastSyncDiff = newTime - nowWas;
          _now = newTime;
          console.log("Synced, diff:" + _lastSyncDiff + ", now:" + _now);
        }
      }
    });
    */
    var newTime = (new Date()).getTime();
    _lastSyncDiff = newTime - _now;
    _now = newTime;
  }

  function formatUnit(base, value) {
    var retval = "<span>" + base;
    if (value !== 1) {
      retval += "s";
    }
    return retval + "</span>";
  }

  function addSecond() {
    _now = _now + (1000 - _lastSyncDiff);
    _lastSyncDiff = 0;
  }

  function updateUI() {
        var timeLeft = Math.max((_endTime - _now)/1000.0, 0);
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        $(".days").html(days + formatUnit("day", days));
        $(".hours").html(hours + formatUnit("hr", hours));
        $(".minutes").html(minutes + formatUnit("min", minutes));
        $(".seconds").html(seconds + formatUnit("sec", seconds));
    }

    if ($("#countdown").length) {
      updateUI();
      setInterval(function() { addSecond(); updateUI(); }, 1000);
      setInterval(function() { syncCurrentTime(); }, 10000);
    }
});
