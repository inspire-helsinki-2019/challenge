$(function() {
  function formatUnit(base, value) {
    var retval = "<span>" + base;
    if (value > 1) {
      retval += "s";
    }
    return retval + "</span>";
  }

  function makeTimer() {
        var endTime = new Date("2019-10-06T16:00:00+02:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = Math.max(endTime - now, 0);
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
      makeTimer();
      setInterval(function() { makeTimer(); }, 1000);
    }
});
