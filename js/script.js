window.addEventListener('load', function () {

   var User_name = document.getElementById('uName');
    User_name.addEventListener('keyup', function () {
        if (User_name.value != '' && User_name.value != ' ') {
            document.getElementById('next_button').removeAttribute("disabled");
        } else {
            document.getElementById('next_button').setAttribute("disabled", "true");
        }
    });


    function downloadImg() {
        var img = new Image();
        var imgsrc=document.getElementById('imgsrc').getAttribute("src");
        img.src = `./${imgsrc}`;
        var canvas = document.createElement("CANVAS");
        var context = canvas.getContext("2d");


        img.onload = function () {
            var fileName = imgsrc;
            context.canvas.width = img.width;
            context.canvas.height = img.height;
            context.drawImage(img, 0, 0, img.width, img.height);
            var name = document.getElementById("uName").value;

            var textX = (img.width) / 2 // here we get the width of name and put it at the center depend on width of (Name)
            var textY = (img.height / 2) + 340
            var textz = (img.height / 2) + 340
            var textc = (img.width) / 2  // here we get the width of title and put it at the center depend on width of (title)

            // White Bluish
            //context.fillStyle = "grey";
            context.fillStyle = "#FFF";
            context.font = "75px GB";
            context.textAlign = "center";
            context.fillText(name, textX, textz);

            if (window.navigator.msSaveBlob) { // IE
                var image = canvas.toDataURL("image/jpeg");
                var blob = createBlob(image);
                window.navigator.msSaveOrOpenBlob(blob, fileName);
            } else if (navigator.userAgent.search("Firefox") !== -1) { // Firefox
                var image = canvas.toDataURL("image/jpeg");
                var blob = createBlob(image);
                var url = window.URL.createObjectURL(blob);

                var link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                // create an image in body and change it's source to view
                //document.getElementsByClassName('')[0].src = link
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);

            }

            // else if (navigator.userAgent.search("Safari") !== -1) { // Safari
            //     var image = canvas.toDataURL("image/jpeg");
            //     var blob = createBlob(image);
            //     var url = window.URL.createObjectURL(blob);

            //     var link = document.createElement('a');
            //     link.href = url;
            //     link.download = fileName;
            //     document.body.appendChild(link);
            //     link.click();
            //     // create an image in body and change it's source to view
            //     //document.getElementsByClassName('')[0].src = link
            //     document.body.removeChild(link);
            //     window.URL.revokeObjectURL(url);
            // }
            else { // Chrome
                var image = canvas.toDataURL("image/jpeg");
                var link = document.createElement('a');
                link.href = image;
                link.download = fileName;
                link.click();
                // create an image in body and change it's source to view            
                //document.getElementsByClassName('')[0].src = link
            }
        };
    };
    var downloadbutton=this.document.getElementById('next_button');
    downloadbutton.addEventListener('click',function () {
        downloadImg();
    })
    function createBlob(dataURL) {
        var BASE64_MARKER = ';base64,';
        if (dataURL.indexOf(BASE64_MARKER) == -1) {
            var parts = dataURL.split(',');
            var contentType = parts[0].split(':')[1];
            var raw = decodeURIComponent(parts[1]);
            return new Blob([raw], {
                type: contentType
            });
        }
        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;

        var uInt8Array = new Uint8Array(rawLength);

        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], {
            type: contentType
        });
    }
    particlesJS('single-particles-fs',
  
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  
  );
})
