Based Off Plugin: Stupidly Simple jQuery Dropdowns - http://dev7studios.com/dropit

Updated to allow users to click in dropdown menu for use cases where need toggle items within menu

    <div class="dropit">
      <div class="dropit-parent"> <span class="dropit-select">Filter by Event Type</span>
        <ul class="dropit-submenu">
          <li class="label-purple active"><a href="#">Middle School</a></li>
          <li class="label-gold active"><a href="#">High School</a></li>
          <li class="label-turquoise active"><a href="#">Women's</a></li>
          <li class="label-red active"><a href="#">Men's</a></li>
          <li class="label-green active"><a href="#">Children's</a></li>
        </ul>
      </div>
    </div>


----------


    $('.dropit').dropit({
    	action: 'click', // The open action for the trigger
    	submenuEl: 'ul', // The submenu element
    	triggerEl: '.dropit-select', // The trigger element
    	triggerParentEl: '.dropit-parent', // The trigger parent element
    	closeOnClick: false // close sub menu on click
    });

CSS Styles
----------

    .dropit-select {font-size: 1.000em; -webkit-appearance: none; border: none; display: block; margin: 0; padding:0 0.444em; height: 2.750em; line-height: 2.750em; width: 100%; transition: background-color 250ms ease; position: relative; cursor: pointer;}
    .dropit-select:after {font-size: 1.313em; content: "\f0d7"; font-family: "FontAwesome"; position: absolute; top: 0; right: 0; display: block; width: 2.500em; height: 100%; text-align: center;}
    .dropit-open .dropit-select:after {content: "\f0d8"}
    .dropit-parent {position: relative;}
    .dropit-submenu {display: none; list-style: none; margin: 0; padding:0; position: absolute; top: auto; left: 0; width: 100%; max-height: 18.750em; overflow-y: auto; z-index: 1;}
    .dropit-submenu li, .dropit-submenu li a {display: block;}
    .dropit-submenu li a {padding:0.500em 0.938em;}
    .dropit-open .dropit-submenu {display: block;}
