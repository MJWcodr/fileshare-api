import fs from 'fs';
import File from '../File';

export default function pythonFormatting(file: any) {
    let fileName: string = file.name
    let fileDir: string = file.tempFilePath
    let fileData: Buffer = fs.readFileSync(fileDir)

    return new File(fileName, fileData, fileDir)
}

