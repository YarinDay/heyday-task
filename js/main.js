function onInit() {
}

function onCreate(ev) {
    create(ev)
    ev.target[0].value = ''
}

function hideGallery() {
    document.querySelector('.file-form').style.display = 'none';
    document.querySelector('.files-container').style.display = 'none';
    document.querySelector('.hr').style.display = 'none';
}

function renderFolders(folder) {
    const x = document.querySelector('.folder-name')
    var option = document.createElement("option")
    option.text = folder.name
    option.value = folder.id
    x.add(option)
}