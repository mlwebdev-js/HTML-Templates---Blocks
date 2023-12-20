class TemplateModule {
    constructor(core) {
        this.core = core;
    }

    loadTemplates(templates) {
        templates.forEach(template => {
            const templateUrl = `templates/${template.name}.html`;
            this.core.ajax(
                templateUrl,
                (responseText) => {
                    document.getElementById(template.target).innerHTML = responseText;
                },
                (error) => {
                    console.error('Error loading template:', error);
                }
            );
        });
    }
}
