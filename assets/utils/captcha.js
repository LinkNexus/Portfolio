/**
 * The callback function executed
 * once all the Google dependencies have loaded
 */
function onGoogleReCaptchaApiLoad() {
    var widgets = document.querySelectorAll('[data-toggle="recaptcha"]');
    for (var i = 0; i < widgets.length; i++) {
        renderReCaptcha(widgets[i]);
    }
}


/**
 * Render the given widget as a reCAPTCHA
 * from the data-type attribute
 */
function renderReCaptcha(widget) {
    const form = widget.closest('form');
    const widgetType = widget.getAttribute('data-type');
    const widgetParameters = {
        'sitekey': '{{ google_recaptcha_site_key }}'
    };

    if (widgetType === 'invisible') {
        widgetParameters['callback'] = function () {
            form.submit()
        };
        widgetParameters['size'] = "invisible";
    }

    const widgetId = grecaptcha.render(widget, widgetParameters);

    if (widgetType === 'invisible') {
        bindChallengeToSubmitButtons(form, widgetId);
    }
}

/**
 * Prevent the submit buttons from submitting a form
 * and invoke the challenge for the given captcha id
 */
function bindChallengeToSubmitButtons(form, reCaptchaId) {
    getSubmitButtons(form).forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            grecaptcha.execute(reCaptchaId);
        });
    });
}