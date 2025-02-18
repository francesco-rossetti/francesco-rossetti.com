export class CertificationModel{
    title: string;
    dates: string;
    url: string;
    description: string;

    constructor();
    constructor(title: string = '', dates: string = '', description: string = '', url: string = ''){
        this.title = title;
        this.dates = dates;
        this.description = description;
        this.url = url;
    }
}
