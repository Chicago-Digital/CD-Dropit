Based Off Plugin: Stupidly Simple jQuery Dropdowns - http://dev7studios.com/dropit

Updated to allow users to click in dropdown menu for use cases where need toggle items within menu


    <div class="dropit">
        <div class="dropit-parent"> <span class="dropit-select">Filter by Event Type</span>
            <ul class="dropit-submenu">
                <li class="dropit-option"><a href="#">Middle School</a></li>
                <li class="dropit-option"><a href="#">High School</a></li>
                <li class="dropit-option"><a href="#">Women's</a></li>
                <li class="dropit-option"><a href="#">Men's</a></li>
                <li class="dropit-option"><a href="#">Children's</a></li>
            </ul>
        </div>
    </div>


----------


    $('.dropit').dropit({
	    action: 'click', // The open action for the trigger
	    submenuEl: 'ul', // The submenu element
	    triggerEl: '.dropit-select', // The trigger element
	    triggerParentEl: '.dropit-parent', // The trigger parent element
	    OptionEl: '.dropit-option', // Active Option Selector
	    setActiveOption: true, // Set Active Option Class and Override Selected Label
	    closeOnClick: true, // Close submenu on click inside
	    afterLoad: function(element) {
	    }, // Triggers when plugin has loaded
	    beforeShow: function(element) {
	    }, // Triggers before submenu is shown
	    afterShow: function(element) {
	    }, // Triggers after submenu is shown
	    beforeHide: function(element) {
	    }, // Triggers before submenu is hidden
	    afterHide: function(element) {
	    } // Triggers before submenu is hidden
    });

CSS Styles
----------

    .dropit-select { font-size: 1.000em; line-height: 2.750em; position: relative; display: block; width: 100%; height: 2.750em; margin: 0; padding: 0 .444em; cursor: pointer; transition: background-color 250ms ease; border: none; -webkit-appearance: none; }
    .dropit-select:after { font-family: 'FontAwesome'; font-size: 1.313em; position: absolute; top: 0; right: 0; display: block; width: 2.500em; height: 100%; content: '\f0d7'; text-align: center; }
    .dropit-open .dropit-select:after { content: '\f0d8'; }
    .dropit-parent { position: relative; }
    .dropit-submenu { position: absolute; z-index: 1; top: auto; left: 0; display: none; overflow-y: auto; width: 100%; max-height: 18.750em; margin: 0; padding: 0; list-style: none; background: #fff; }
    .dropit-submenu li, .dropit-submenu li a { display: block; }
    .dropit-submenu li a { padding: .500em .938em; }
    .dropit-open .dropit-submenu { display: block; }

