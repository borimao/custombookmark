import { connect } from 'react-redux'

import App from '../App'
import { onTextChange, LinkSave, LoadLink, HandleClick, InputReset, DeleteLink, EditLink, LinkSave2, SetColor, ColorChange, SaveColor } from '../action/app'

function mapStateToProps(state) {
    return state
}

function mapDispachToProps(dispatch) {
    return{
        onTextChange: e => { dispatch(onTextChange(e))},
        LinkSave: () => {dispatch(LinkSave())},
        LoadLink: links => {dispatch(LoadLink(links))},
        HandleClick: t => { dispatch(HandleClick(t)) },
        InputReset: name => { dispatch(InputReset(name)) },
        DeleteLink: id => { dispatch(DeleteLink(id))},
        EditLink: id => { dispatch(EditLink(id))},
        LinkSave2: id => { dispatch(LinkSave2(id))},
        SetColor: c => { dispatch(SetColor(c)) },
        ColorChange: color => { dispatch(ColorChange(color)) },
        SaveColor: color => { dispatch(SaveColor(color)) }
    }
}

export default connect(mapStateToProps,mapDispachToProps)(App)