import React from "react"
import Link from './Link'

export default class LinksList extends React.Component {
    render() {
        return(
            <div className="LinksList" style={{backgroundColor:this.props.c1}}> 
                <ul>
                    {this.props.links.map((s, i)=>{
                        return(
                            <li key={i}>
                                <Link 
                                    image={s.image} 
                                    title={s.title} 
                                    url={s.url}
                                    class="LL_style"
                                    link_id={i}
                                    DeleteLink={this.props.DeleteLink}
                                    EditLink={this.props.EditLink}
                                    dl_display={this.props.dl_display}
                                    ed_display={this.props.ed_display}
                                    opacity={this.props.opacity}
                                    c2={this.props.c2}
                                    c3={this.props.c3}
                                />
                            </li>
                        )
                    })}
                    <li>
                        <div className="Link LL_style">
                            <div className="addimage" style={{color:this.props.c3,border:"solid 2px "+ this.props.c3,backgroundColor:this.props.c2,opacity: this.props.opacity ? 0.5 : 1,cursor: this.props.opacity ? "default" : "pointer"}}>
                                ＋
                                <a onClick={() => this.props.HandleClick("ml")} style={{display: this.props.opacity ? 'none' : ''}}></a>
                            </div>
                            <p style={{color:this.props.c3,opacity: this.props.opacity ? 0.5 : 1,cursor: this.props.opacity ? "default" : "default"}}>追加</p>
                        </div>
                    </li>
                    <li>
                        <div className="Link LL_style">
                            <div className="addimage" style={{color:this.props.c3,border:"solid 2px "+ this.props.c3,backgroundColor:this.props.c2,opacity: this.props.dl_display ? 0.5 : 1,cursor: this.props.dl_display ? "default" : "pointer"}}>
                                ✐
                                <a onClick={() => this.props.HandleClick("ed")} style={{display: this.props.dl_display ? 'none' : ''}}></a>
                            </div>
                            <p style={{color:this.props.c3,opacity: this.props.dl_display ? 0.5 : 1,cursor: this.props.dl_display ? "default" : "default"}}>編集</p>
                        </div>
                    </li>
                    <li>
                        <div className="Link LL_style">
                            <div className="addimage" style={{color:this.props.c3,border:"solid 2px "+ this.props.c3,backgroundColor:this.props.c2,opacity: this.props.ed_display ? 0.5 : 1,cursor: this.props.ed_display ? "default" : "pointer"}}>
                                ×
                                <a onClick={() => this.props.HandleClick("dl")} style={{display: this.props.ed_display ? 'none' : ''}}></a>
                            </div>
                            <p style={{color:this.props.c3,opacity: this.props.ed_display ? 0.5 : 1,cursor: this.props.ed_display ? "default" : "default"}}>削除</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        );
    }
}