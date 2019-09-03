$(function() {
  function makeTimer() {
        var endTime = new Date("2019-09-30T16:00:00+02:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = Math.max(endTime - now, 0);
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $(".days").html(days + "<span>days</span>");
        $(".hours").html(hours + "<span>hrs</span>");
        $(".minutes").html(minutes + "<span>min</span>");
        $(".seconds").html(seconds + "<span>sec</span>");
    }
    if ($("#countdown").length) {
      makeTimer();
      setInterval(function() { makeTimer(); }, 1000);
    }
});
