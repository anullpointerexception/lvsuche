import { File } from "./File";

export class Lesson {
    constructor(LV_TITEL: string, Keywords: string[], files: File[]){
        this.LV_TITEL = LV_TITEL;
        this.Keywords = Keywords;
        this.Files = files;
    }

    LV_ID?: string;
    LV_TITEL: string;
    Studiengang?: string;
    Sem?: number;
    Standarisiert?: boolean;
    NextcloudLink?: string;
    NextcloudOrdnerName?: string;
    NextcloudLV_Info?:any;
    Jahr?: string;
    Ansprechpartner?: string[];
    Keywords: string[];
    Kommentare?: string;
    LV_Typ?: string;
    Voraussetzungen?: string[];
    Programmiersprache?: string;
    Coderunner?: any;
    Files?: File[];
}