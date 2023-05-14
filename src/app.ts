// Decorators
function autobind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}

//
class PJInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;

    const importedHtml = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedHtml.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInput = this.element.querySelector("#title") as HTMLInputElement;
    this.descriptionInput = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInput = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  @autobind
  private submit(event: Event) {
    event.preventDefault();
  }

  private configure() {
    this.element.addEventListener("submit", this.submit);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new PJInput();
