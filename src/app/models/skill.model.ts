export class SkillModel {
    title: string;
    image: string;
    description: string;

    constructor();
    constructor(title: string = '', image: string = '', description: string = '') {
        this.title = title;
        this.image = image;
        this.description = description;
    }
}
