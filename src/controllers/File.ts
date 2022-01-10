export default class File {
    data: Buffer;
    name: string;
    path?: string;

    constructor(fileName: string, fileData: Buffer, filePath?: string) {
        this.data = fileData
        this.name = fileName
        if (filePath) {
            this.path = filePath
        }
    }

}