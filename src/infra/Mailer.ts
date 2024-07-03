
export default class Mailer {
    mailer_list: any[] = [];

    push(num: number) {
        this.mailer_list.push(num);
    }

    show() {
        for (const mail of this.mailer_list) {
            console.log(mail);
        }
    }

    get_mails(): any[] {
        return this.mailer_list;
    }
}
