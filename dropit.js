// CD Dropit v1.1

;
(function($) {

    $.fn.dropit = function(method) {

        var methods = {

            init: function(options) {
                this.dropit.settings = $.extend({}, this.dropit.defaults, options);
                return this.each(function() {
                    var $el = $(this),
                        el = this,
                        settings = $.fn.dropit.settings;

                    // Hide initial submenus
                    $el.addClass('dropit')
                        .find('>' + settings.triggerParentEl + ':has(' + settings.submenuEl + ')').addClass('dropit-trigger')
                        .find(settings.submenuEl).addClass('dropit-submenu');

                    // Open on click
                    $el.off(settings.action).on(settings.action, settings.triggerParentEl + ':has(' + settings.submenuEl + ') > ' + settings.triggerEl + '', function() {
                        // Close click menu's if clicked again
                        if (settings.action == 'click' && $(this).parents(settings.triggerParentEl).hasClass('dropit-open')) {
                            settings.beforeHide.call(this, $el);
                            $(this).parents(settings.triggerParentEl).removeClass('dropit-open');
                            settings.afterHide.call(this, $el);
                            return false;
                        }

                        // Hide open menus
                        $('.dropit-open').removeClass('dropit-open');

                        // Open this menu
                        settings.beforeShow.call(this, $el);
                        $(this).parents(settings.triggerParentEl).addClass('dropit-open');
                        settings.afterShow.call(this, $el);

                        return false;
                    });

                    // Set Active Option
                    var optionClassName = (settings.OptionEl + "--active").substring(1);
                    $el.find(settings.OptionEl).click(function() {
                        var $this = $(this);
                        if (!$this.hasClass(optionClassName)) {
                            $el.find(settings.OptionEl + "--active").removeClass(optionClassName);
                            $this.addClass(optionClassName);
                            $el.find(settings.triggerEl).text($this.text());
                        }
                    });

                    // Close if outside click
                    $(document).on('click', function(e) {
                        if (settings.closeOnClick) {
                            if ($el.find('.dropit-open').length) {
                                settings.beforeHide.call(this, $el);
                                $el.find('.dropit-open').removeClass('dropit-open');
                                settings.afterHide.call(this, $el);
                            }
                        } else {
                            if (!e) e = window.event;
                            var target = e.target || e.srcElement;
                            if (!$(target).closest($el.find(settings.submenuEl)).length) {
                                if ($el.find('.dropit-open').length) {
                                    settings.beforeHide.call(this, $el);
                                    $el.find('.dropit-open').removeClass('dropit-open');
                                    settings.afterHide.call(this, $el);
                                }
                            }
                        }

                    });

                    // If hover
                    if (settings.action == 'mouseenter') {
                        $el.on('mouseleave', '.dropit-open', function() {
                            settings.beforeHide.call(this, $el);
                            if (settings.closeOnClick) {
                                $el.find('.dropit-open').removeClass('dropit-open');
                            } else {
                                if (!e) e = window.event;
                                var target = e.target || e.srcElement;
                                if (!$(target).closest($el.find(settings.submenuEl)).length) {
                                    $el.find('.dropit-open').removeClass('dropit-open');
                                }
                            }
                            settings.afterHide.call(this, $el);
                        });
                    }
                    settings.afterLoad.call(this, $el);
                });
            }

        };

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method "' + method + '" does not exist in dropit plugin!');
        }

    };

    $.fn.dropit.defaults = {
        action: 'click', // The open action for the trigger
        submenuEl: 'ul', // The submenu element
        triggerEl: '.dropit-select', // The trigger element
        triggerParentEl: '.dropit-parent', // The trigger parent element
        OptionEl: '.dropit-option',
        setActiveOption: false,
        closeOnClick: false, // Close submenu on click inside
        afterLoad: function() {}, // Triggers when plugin has loaded
        beforeShow: function() {}, // Triggers before submenu is shown
        afterShow: function() {}, // Triggers after submenu is shown
        beforeHide: function() {}, // Triggers before submenu is hidden
        afterHide: function() {} // Triggers before submenu is hidden
    };

    $.fn.dropit.settings = {};

})(jQuery);
