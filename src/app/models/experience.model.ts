export class ExperienceModel {
    title: string;
    period: string;
    position: string;
    description: string;

    constructor()
    constructor(title: string = '', period: string = '', position: string = '', description: string = '') {
        this.title = title;
        this.period = period;
        this.position = position;
        this.description = description;
    }
}
