$(function() {
  var _state = {
    endTime: (new Date("2019-10-06T23:59:00+02:00")).getTime(),
    pendingOffset: 0,
    lastTick: Date.now(),
    now: Date.now()
  };

  function updateOffset(offset, requestTime) {
    _state.pendingOffset = offset - requestTime / 2.0;
  }

  syncCurrentTime(_state.now, updateOffset);

  function syncCurrentTime(myTime, callback) {
    var start = Date.now();
    $.ajax({
      url: "https://www.spatineo.com/time/",
      jsonp: "callback",
      dataType: "jsonp",
      data: { mine: myTime },
      success: function( offset ) {
        var requestTime = Date.now() - start;
        var numOffset = parseFloat(offset);
        if (!Number.isNaN(numOffset)) {
          callback(numOffset, requestTime);
        } else {
          console.log("time sync did not return a float");
          callback(0,0);
        }
      },
      error: function() {
        console.log("time sync did not succeed");
        callback(0,0);
      }
    });
  }

  function formatUnit(base, value) {
    var retval = "<span>" + base;
    if (value !== 1) {
      retval += "s";
    }
    return retval + "</span>";
  }

  function updateUI() {
    var timeLeft = Math.max((_state.endTime - _state.now)/1000.0, 0);
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
    setInterval(function() {
      var now = Date.now();
      _state.now = _state.now + (now - _state.lastTick) + _state.pendingOffset;
      _state.lastTick = now;
      _state.pendingOffset = 0;
      updateUI();
    }, 1000);
    setInterval(function() {
      syncCurrentTime(_state.now, updateOffset);
    }, 60000);
  }
});
