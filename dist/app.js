"use strict";
class PJInput {
    templateElement;
    hostElement;
    element;
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedHtml = document.importNode(this.templateElement.content, true);
        this.element = importedHtml.firstElementChild;
        this.element.id = "user-input";
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
const prjInput = new PJInput();
//# sourceMappingURL=app.js.map