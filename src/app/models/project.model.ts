export class ProjectModel {
    name: string;
    description: string;
    url: string;
    technologies: string[];

    constructor();
    constructor(name: string = "", description: string = "", url: string = "", technologies: string[] = []) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.technologies = technologies;
    }
}
