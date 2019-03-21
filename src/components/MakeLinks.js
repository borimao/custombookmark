import React from "react"
import Link from './Link'

export default class MakeLinks extends React.Component {
    render() {
        return(
            <div className="MakeLinks">
                <button className="close_button" onClick={() => this.props.HandleClick("ml")} style={{display: this.props.display ? 'none' : ''}}>×</button>
                <h2>Add New Link</h2>
                <div className="linkarea" style={{backgroundColor:this.props.c1}}>
                    <Link 
                        image={this.props.image} 
                        title={this.props.title} 
                        url={this.props.url}
                        size="250px"
                        p_size="30px"
                        f_size="150%"
                        class="ML_style"
                        c1={this.props.c1}
                        c2={this.props.c2}
                        c3={this.props.c3}
                    />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>タイトル</th>
                            <td><input className="state_input" name='title' onChange={this.props.onTextChange} value={this.props.title}/></td>
                            <td><button className="state_button" onClick={() => this.props.InputReset("title")}>×</button></td>
                        </tr>
                        <tr>
                            <th>サイトURL</th>
                            <td><input className="state_input" name='url' onChange={this.props.onTextChange} value={this.props.url}/></td>
                            <td><button className="state_button" onClick={() => this.props.InputReset("url")}>×</button></td>
                        </tr>
                        <tr>
                            <th>画像URL</th>
                            <td><input className="state_input" name='image' onChange={this.props.onTextChange} value={this.props.image}/></td>
                            <td><button className="state_button" onClick={() => this.props.InputReset("image")}>×</button></td>
                        </tr>
                    </tbody>
                </table>
                <button className="save_button" onClick={this.props.send}>SAVE</button>
            </div>
        );
    }
}