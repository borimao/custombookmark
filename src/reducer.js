var getjson = localStorage.getItem('linkstest');
var links = JSON.parse(getjson);
if(links == null){
    console.log('ようこそ')
    const set = [
        {
            title : "youtube",
            url : "https://www.youtube.com/",
            image : "data:image/png;base64,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",
        }
    ]
    const setjson = JSON.stringify(set)
    localStorage.setItem('linkstest', setjson)
    getjson = localStorage.getItem('linkstest');
    links = JSON.parse(getjson);
}
var getjson2 = localStorage.getItem('colors');
var colors = JSON.parse(getjson2);
if(colors == null){
    const set2 = {
        c1 : "rgb(0,172,172)",
        c2 : "rgb(255,255,255)",
        c3 : "rgb(0,0,0)"
    }
    const setjson2 = JSON.stringify(set2)
    localStorage.setItem('colors', setjson2)
    getjson2 = localStorage.getItem('colors');
    colors = JSON.parse(getjson2);
}

const initialState = {
    title : "",
    url : "",
    image : "",
    links : links,
    ml_display : false,
    ml2_display : false,
    dl_display : false,
    ed_display : false,
    cp_display : false,
    opacity : false,
    edit_id : 0,
    radio : "c1",
    c1 : colors.c1,
    c2 : colors.c2,
    c3 : colors.c3
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'TEXTCHANGE':
            if(action.e.target.name === 'title'){
                return Object.assign({}, state, {
                    title: action.e.target.value
                })
            }else if(action.e.target.name === 'url'){
                return Object.assign({}, state, {
                    url: action.e.target.value
                })
            }else if(action.e.target.name === 'image'){
                return Object.assign({}, state, {
                    image: action.e.target.value
                })
            }
            break;

        case 'LINKSAVE':
            const set = [
                ...state.links,
                {
                    title : state.title,
                    url : state.url,
                    image : state.image,
                }
            ]
            const setjson = JSON.stringify(set)
            localStorage.setItem('linkstest', setjson)
            return Object.assign({}, state, {
                links: [
                    ...state.links,
                    {
                        title : state.title,
                        url : state.url,
                        image : state.image,
                    }
                ],
                title : "",
                url : "",
                image : "",
                ml_display: !state.ml_display
            });

        case 'LOADLINK':
            console.log(action.links)
            return Object.assign({}, state, {
                links: [action.links],
                count: 1,
            })

        case 'HANDLECLICK':
            if(action.t === "ml"){
                return Object.assign({}, state, {
                    ml_display: !state.ml_display,
                    cp_display: false
                })
            }else if(action.t === "dl"){
                return Object.assign({}, state, {
                    dl_display: !state.dl_display,
                    cp_display: false,
                    opacity: !state.opacity
                })
            }else if(action.t === "ed"){
                return Object.assign({}, state, {
                    ed_display: !state.ed_display,
                    cp_display: false,
                    opacity: !state.opacity
                })
            }else if(action.t === "cp"){
                console.log('otinko');
                return Object.assign({}, state, {
                    cp_display: !state.cp_display
                })
            }

        case 'INPUTRESET':
            if(action.name === "title"){
                return Object.assign({}, state, {
                    title: ""
                })
            }else if(action.name === "url"){
                return Object.assign({}, state, {
                    url: ""
                })
            }else if(action.name === "image"){
                return Object.assign({}, state, {
                    image: ""
                })
            }
            break;

        case 'DELETELINK':
            const set2 = state.links.slice();
            set2.splice(action.id,1);
            const setjson2 = JSON.stringify(set2)
            localStorage.setItem('linkstest', setjson2)
            return Object.assign({},state, {
                links: set2,
            })

        case 'EDITLINK':
            return Object.assign({},state, {
                ml2_display: !state.ml2_display,
                title : state.links[action.id].title,
                url : state.links[action.id].url,
                image : state.links[action.id].image,
                edit_id : action.id
            })

        case 'LINKSAVE2':
            const set3 = state.links.slice();
            set3[action.id] = {
                title : state.title,
                url : state.url,
                image : state.image
            }
            const setjson3 = JSON.stringify(set3)
            localStorage.setItem('linkstest', setjson3)
            return Object.assign({},state, {
                links: set3,
                title : "",
                url : "",
                image : "",
                ml2_display: !state.ml2_display
            })
        
        case 'SETCOLOR':
            return Object.assign({},state, {
                radio: action.c
            })

        case 'COLORCHANGE':
            if(state.radio == "c1"){
                return Object.assign({},state, {
                    c1: "rgba("+ action.color.rgb.r +","+ action.color.rgb.g +","+ action.color.rgb.b +","+ action.color.rgb.a +")"
                })
            }else if(state.radio == "c2"){
                return Object.assign({},state, {
                    c2: "rgba("+ action.color.rgb.r +","+ action.color.rgb.g +","+ action.color.rgb.b +","+ action.color.rgb.a +")"
                })
            }else if(state.radio == "c3"){
                return Object.assign({},state, {
                    c3: "rgba("+ action.color.rgb.r +","+ action.color.rgb.g +","+ action.color.rgb.b +","+ action.color.rgb.a +")"
                })
            }
        
        case 'SAVECOLOR' : 
            const c_set = {
                c1 : state.c1,
                c2 : state.c2,
                c3 : state.c3
            }
            const c_setjson = JSON.stringify(c_set)
            localStorage.setItem('colors', c_setjson)
        default:
            return state
    }
    
}