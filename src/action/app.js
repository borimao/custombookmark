export const onTextChange = (e) => ({
    type: 'TEXTCHANGE',
    e
})

export const LinkSave = () => ({
    type: 'LINKSAVE',
})

export const LoadLink = (links) => ({
    type: 'LOADLINK',
    links
})

export const HandleClick = (t) => ({
    type: 'HANDLECLICK',
    t
})

export const InputReset = (name) => ({
    type: 'INPUTRESET',
    name
})

export const DeleteLink = (id) => ({
    type: 'DELETELINK',
    id
})

export const EditLink = (id) => ({
    type: 'EDITLINK',
    id
})

export const LinkSave2 = (id) => ({
    type: 'LINKSAVE2',
    id
})

export const SetColor = (c) => ({
    type: 'SETCOLOR',
    c
})

export const ColorChange = (color) => ({
    type: 'COLORCHANGE',
    color
})

export const SaveColor = (color) => ({
    type: 'SAVECOLOR',
    color
})

