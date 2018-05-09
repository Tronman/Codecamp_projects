var MYLIBRARY = MYLIBRARY || (function() {
    var _args = {}; // private

    return {
        init: function(Args) {
            _args = Args;
            // some other initialising
        },
        loader: function() {

            var canvas = document.createElement('canvas');
            canvas.id = "counterID";
            canvas.width = _args[0];
            canvas.height = _args[1];

            cw = canvas.width;
            ch = canvas.height;

            canvas.style.zIndex = 8;
            canvas.style.position = "absolute";
            canvas.style.border = "1px solid";

            var body = document.getElementsByTagName("body")[0];
            body.appendChild(canvas);
            counterID = document.getElementById("counterID");
            console.log(counterID);
            var counter = canvas.getContext("2d");
            var pointToFill = 4.72;
            var no = 0;
            var diff;

            function firstCircle() {
                counter.lineWidth = 30;
                counter.fillStyle = '#fff';
                counter.strokeStyle = '#f44141';
                counter.beginPath();
                counter.arc(cw / 2, ch / 2, 90, 0, 2 * Math.PI);
                counter.stroke();
            }

            function fillCounter() {
                diff = ((no / 100) * Math.PI * 2 * 10);
                counter.lineWidth = 30;
                counter.fillStyle = '#000000';
                counter.strokeStyle = '#56f441';
                counter.textAlign = 'center';
                counter.font = "25px monospace";
                counter.clearRect(280, 280, 40, 40);
                counter.fillText(no + "%", cw / 2, ch / 2 + 4);
                counter.beginPath();
                counter.arc(cw / 2, ch / 2 , 90, pointToFill, diff / 10 + pointToFill);
                counter.stroke();

                if (no >= _args[2]) {
                    clearTimeout(fill);
                }
                no++;
            }
            firstCircle();
            var fill = setInterval(fillCounter, 30);


        }
    };
}());