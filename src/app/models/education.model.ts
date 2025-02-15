export class EducationModel {
    institution?: string;
    degree?: string;
    period?: string;
    thesis_abstract?: string;

    constructor();
    constructor(institution: string = '', degree: string = '', period: string = '', thesis_abstract: string = '') {
        this.institution = institution;
        this.degree = degree;
        this.period = period;
        this.thesis_abstract = thesis_abstract;
    }
}
