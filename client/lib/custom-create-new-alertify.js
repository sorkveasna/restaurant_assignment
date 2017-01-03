customCreateNewAlertify = function (names, options) {

    let alerts = _.isArray(names) ? names : [names];
    options = _.isUndefined(options) ? {} : options;

    // Set default options
    _.defaults(options, {transition: 'fade', size: 'df', closableByDimmer: true, maximizable: false});

    // Create
    _.forEach(alerts, (element) => {
        let name = element;

        if (!alertify[name]) {
            alertify.dialog(name, function () {
                return {
                    main: function (title, message) {
                        this.setting('title', title);
                        this.message = message;

                        if (message.html && message.instance) {
                            this.message = message.html;
                            this.instance = message.instance;
                        }
                    },
                    setup: function () {
                        return {
                            options: {
                                maximizable: options.maximizable,
                                closableByDimmer: options.closableByDimmer,
                                resizable: false,
                                transition: options.transition,
                                /*disable autoReset, to prevent the dialog from resetting it's size on window resize*/
                                autoReset: false
                            }
                        };
                    },
                    prepare: function () {
                        this.setContent(this.message);
                        this.elements.footer.style.display = "none";
                    },
                    hooks: {
                        onshow: function () {
                            if (options.size == 'lg') {
                                this.elements.dialog.style.maxWidth = 'none';
                                this.elements.dialog.style.width = '85%';
                            }
                            if (options.size == 'md') {
                                this.elements.dialog.style.maxWidth = 'none';
                                this.elements.dialog.style.width = '50%';
                            }
                        },
                        onclose: function () {
                            if (this.instance) {
                                Blaze.remove(this.instance);
                            }
                        }
                    }
                };
            }, false, 'alert');
        }

    });
};
