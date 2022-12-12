var gFiles = {}
var gFolders = {}

function getFiles() {
    return gFiles
}

function getFolders() {
    return gFolders
}

function create(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    let file = {}
    const fileName = ev.target[0].value
    if (!fileName) return
    file.id = makeId()
    file.name = fileName
    file.type = ev.target[2].value
    file.parent = ev.target[1].value
    if (file.type === 'folder') {
        gFolders[file.id] = file
        renderFolders(file)
    }
    else gFiles[file.id] = file
    renderFiles()
}

function getFileById(id) {
    const files = getFiles()
    return files[id]
}