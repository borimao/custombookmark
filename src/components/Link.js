import React from "react"
import { CSSTransition } from 'react-transition-group';

export default class Link extends React.Component {
    render() {
        return(
            <div className={"Link" + " " + this.props.class} >
                <CSSTransition
                    in={this.props.dl_display}
                    classNames="maru"
                    timeout={1}
                >
                    <button className="delete_button" onClick={() => this.props.DeleteLink(this.props.link_id)} >×</button>
                </CSSTransition>

                <CSSTransition
                    in={this.props.ed_display}
                    classNames="maru"
                    timeout={1}
                >
                    <button className="delete_button" onClick={() => this.props.EditLink(this.props.link_id)} >✐</button>
                </CSSTransition>
                <div className={this.props.dl_display ? "linkimage shake" : "linkimage"} style={{backgroundColor:this.props.c2, border:"solid 2px "+ this.props.c3,opacity: this.props.opacity ? 0.5 : 1}}>
                    {(() => {
                        const mozi = this.props.title.slice(0,1)
                        if(this.props.image == ""){
                            return <p style={{color:this.props.c3,backgroundColor:this.props.c2,opacity: this.props.opacity ? 0.5 : 1,cursor: this.props.opacity ? "default" : "pointer"}}>{mozi}</p>
                        }else {
                            return <img src={this.props.image} style={{backgroundColor:this.props.c2,opacity: this.props.opacity ? 0.5 : 1,cursor: this.props.opacity ? "default" : "pointer"}}/>
                        }
                    })()}
                    
                    <a className="a" href={this.props.url} target="_blank" style={{display: this.props.opacity ? 'none' : ''}}></a>
                </div>
                <p style={{color:this.props.c3,opacity: this.props.opacity ? 0.5 : 1,cursor: this.props.opacity ? "default" : "default"}}>{this.props.title}</p>
                
            </div>
        );
    }
}