document.addEventListener('DOMContentLoaded', function() {
    const core = new CoreModule();
    const templateModule = new TemplateModule(core);

    const templatesToLoad = [
        { name: 'about', target: 'main-content' },
        { name: 'contact', target: 'contact-section' },
        { name: 'portfolio', target: 'portfolio-section' },
       // Add more templates as needed
    ];

    templateModule.loadTemplates(templatesToLoad);
});
