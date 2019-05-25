import React from "react"
import { CSSTransition } from 'react-transition-group';
import { ChromePicker } from 'react-color';

export default class Link extends React.Component {
    render() {
        return(
            <div>
                <CSSTransition
                    in={this.props.cp_display}
                    classNames="CP"
                    timeout={1}
                >
                    <div className="ColorPicker" style={{border:"solid 2px "+ this.props.c3}}>
                        <div className="picarea">
                            <ChromePicker
                                color={this.props.color}
                                onChange={this.props.ColorChange}
                                onChangeComplete={this.props.SaveColor}
                                width="100%"
                            />
                        </div>
                        <div className="radios">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="nowcolor" style={{color:this.props.c1}}>c1</td>
                                        <td><input type="radio" name="setcolor" value="c1" checked={this.props.radio === "c1"} onChange={() => this.props.SetColor("c1")}/></td>
                                        <td style={{width:"195px"}}>{this.props.c1}</td>
                                    </tr>
                                    <tr>
                                        <td className="nowcolor" style={{color:this.props.c2}}>c2</td>
                                        <td><input type="radio" name="setcolor" value="c2" checked={this.props.radio === "c2"} onChange={() => this.props.SetColor("c2")}/></td>
                                        <td style={{width:"195px"}}>{this.props.c2}</td>
                                    </tr>
                                    <tr>
                                        <td className="nowcolor" style={{color:this.props.c3}}>c3</td>
                                        <td><input type="radio" name="setcolor" value="c3" checked={this.props.radio === "c3"} onChange={() => this.props.SetColor("c3")}/></td>
                                        <td style={{width:"195px"}}>{this.props.c3}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}