document.addEventListener('DOMContentLoaded', function() {
    const core = new CoreModule();
    const templateModule = new TemplateModule(core);

    function loadTemplate(templateName) {
        templateModule.loadTemplate(templateName, 'main-content');
        window.history.pushState({}, '', templateName + '.html');
    }

    // Event listener for the "About" link
    document.getElementById('nav-about').addEventListener('click', function(e) {
        e.preventDefault();
        loadTemplate('about');
    });

    document.getElementById('nav-contact').addEventListener('click', function(e) {
        e.preventDefault();
        loadTemplate('contact');
    });

    // ... other event listeners ...
});
