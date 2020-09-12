class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;
    formElement: HTMLFormElement;

    constructor() {
        this.templateElement = document.getElementById('project-input') as HTMLTemplateElement;
        this.hostElement = document.getElementById('app') as HTMLElement;

        const importedHtmlContent = document.importNode(this.templateElement.content, true);
        this.formElement = importedHtmlContent.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
}

const projectInput = new ProjectInput();
