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
