function renderFiles() {
    let files = getFiles()
    let folders = getFolders()
    let elFilesContainer = document.querySelector('.files-container')
    let strHTML = Object.entries(files).map(([id, file]) => {
        console.log(file);
        return `<div class="${file.type}" onclick="onFileSelected('${file.id}')">
        <div class="file-name">${file.name}</div>
        </div>`
    })
    strHTML.push(Object.entries(folders).map(([id, folder]) => {
        console.log(folder);
        return `<div class="${folder.type}">
        <div class="folder-name">${folder.name}</div>
        </div>`
    }))
    elFilesContainer.innerHTML = strHTML.join('')
}

function onFileSelected(id) {
    const file = getFileById(id)
    let elFile = document.querySelector('.file-preview')
    const strHTML = `<div class="${file.type}">
        <div class="file-name">${file.name}</div>
        <div class="file-parent">${file.parent}</div>
        </div>`
    elFile.innerHTML = strHTML
    renderFile()
}

function renderFile() {
    hideGallery()
}
