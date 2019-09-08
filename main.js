$(function() {
  var peregian = { lat: -26.440556, lng: 153.195556 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: peregian,
    disableDefaultUI: true,
    scrollwheel: false
  });

  var getUrl = window.location;
  var baseUrl =
    getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1];

  var iconBase = baseUrl;

  var icons = {
    whale: {
      icon: "https://benduncan.github.io/wilky-the-whale-ui/location.png"
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(-26.488398, 153.108004),
      type: "whale"
    },
    {
      position: new google.maps.LatLng(-26.450746, 153.114223),
      type: "whale"
    }
  ];

  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
      optimized: false
    });

    /*
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          */

    var popupContent = $("DIV#content_window");

    var wavesurfer;

    var infoWindow = new SnazzyInfoWindow({
      marker: marker,

      placement: "right",
      offset: {
        top: "",
        left: "20px"
      },
      maxWidth: "720",
      maxHeight: "",
      content: popupContent.html(),
      showCloseButton: true,
      closeOnMapClick: true,
      closeWhenOthersOpen: true,
      panOnOpen: true,
      padding: "4px",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      border: false,
      borderRadius: "0px",
      shadow: false,
      fontColor: "#fff",
      fontSize: "15px",

      callbacks: {
        open: function() {
          $("DIV#menu").hide();
          console.log("OPEN!");

          var progressDiv = document.querySelector("#progress");
          var progressBar = progressDiv.querySelector(".progress-bar");

          wavesurfer = WaveSurfer.create({
            container: document.querySelector("#waveform"),
            barWidth: 2,
            barHeight: 1, // the height of the wave
            barGap: null // the optional spacing between bars of the wave, if not provided will be calculated in legacy format
          });

          wavesurfer.load("assets/audio/whale_song_1.mp3?test=1");

          var showProgress = function(percent) {
            progressDiv.style.display = "";
            progressBar.style.width = percent + "%";
          };

          var hideProgress = function() {
            progressDiv.style.display = "none";
          };

          wavesurfer.on("loading", showProgress);
          wavesurfer.on("destroy", hideProgress);
          wavesurfer.on("error", hideProgress);

          wavesurfer.on("ready", function() {
            wavesurfer.play();
            hideProgress();
          });
        },

        close: function() {
          $("DIV#menu").show();
          wavesurfer.playPause();
        }
      }
    });
  }

  function createMarkerSonar() {
    var xmlns = "http://www.w3.org/2000/svg";

    $('IMG[src="http://localhost:8888/location.png"]').each(function() {
      console.log($(this).parent());

      var svg = document.querySelector("#radar");

      var wrapper = document.createElementNS(xmlns, "g");
      svg.appendChild(wrapper);

      //var avatar =
      ("https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-9/10959348_915460485165465_3464826768341583786_n.jpg?oh=e55f669d26f2bf6387fa5fd80ffd54de&oe=57D4A60D&__gda__=1473128463_76b8b4e420a4640595443db097f9ce05");
      //var avatarSize = window.innerHeight * 0.23;
      var flareSize = "50";

      //document.querySelector(".image").style.width = avatarSize + "px";
      //document.querySelector(".image").style.height = avatarSize + "px";
      //document.querySelector(".image").style.background = "url(" + avatar + ") no-repeat center center";
      // document.querySelector(".image").style.backgroundSize = "cover";

      document.querySelector(".f-anim1").style.width = flareSize + "px";
      document.querySelector(".f-anim1").style.height = flareSize + "px";
      document.querySelector(".f-anim2").style.width = flareSize + "px";
      document.querySelector(".f-anim2").style.height = flareSize + "px";
      document.querySelector(".f-anim3").style.width = flareSize + "px";
      document.querySelector(".f-anim3").style.height = flareSize + "px";

      $(this)
        .parent()
        .html(svg);
    });
  }

  google.maps.event.addListenerOnce(map, "tilesloaded", function() {
    //createMarkerSonar();
  });
});
