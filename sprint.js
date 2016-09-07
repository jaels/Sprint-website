
    (function() {
        var clickAll = function() {menu.classList.remove("menu-on-display");}
        var menuButton = document.getElementById('menu-logo');
        var menu = document.getElementsByClassName("menu-non-display")[0];
        menuButton.addEventListener('click', function () {
            menu.classList.add("menu-on-display");


            menu.addEventListener('mousedown', function(e) {
                e.stopPropagation();
            });


            document.addEventListener("mousedown", clickAll);



        });
        var x = document.getElementById('x');
        x.addEventListener('click', function() {
            menu.classList.remove("menu-on-display");

            document.removeEventListener("mousedown", clickAll);


        });
    })();
