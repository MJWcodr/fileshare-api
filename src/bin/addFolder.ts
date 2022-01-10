import fs from 'node:fs';

export default function addFolder(folderName: string): void {
    const _datadir: string = "./data/files"
    if (!fs.existsSync(_datadir)) {
        fs.mkdir(_datadir, (err) => {
            console.log(!fs.existsSync(_datadir))
            console.error(err);
        })
    }
    const _filedir = _datadir + "/" + folderName
    
    
    console.log(`--debug--
    `)

    console.log(_filedir)
    console.log(`
--debug--
`)
}
