import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import MakeLinks from './components/MakeLinks'
import LinksList from './components/LinksList'
import ColorPicker from './components/ColorPicker'

class App extends Component {
  
  
  render() {
    return (
      <div className="App" style={{backgroundColor:this.props.c1}}>
        <CSSTransition
          in={this.props.ml_display}
          classNames="ML"
          timeout={1}
        >
          <div className="Shadow">
            <MakeLinks 
              onTextChange={this.props.onTextChange} 
              send={this.props.LinkSave} 
              title={this.props.title}
              url={this.props.url}
              image={this.props.image}
              HandleClick={this.props.HandleClick}
              InputReset={this.props.InputReset}
              c1={this.props.c1}
              c2={this.props.c2}
              c3={this.props.c3}
            />
          </div>
        </CSSTransition>
        <CSSTransition
          in={this.props.ml2_display}
          classNames="ML"
          timeout={1}
        >
          <div className="Shadow" >
            <MakeLinks 
              display={true}
              onTextChange={this.props.onTextChange} 
              send={() => this.props.LinkSave2(this.props.edit_id)} 
              title={this.props.title}
              url={this.props.url}
              image={this.props.image}
              HandleClick={true}
              InputReset={this.props.InputReset}
              c1={this.props.c1}
              c2={this.props.c2}
              c3={this.props.c3}
            />
          </div>
        </CSSTransition>
        <ColorPicker 
          radio={this.props.radio}
          SetColor={this.props.SetColor}
          color={(() => {
            if(this.props.radio === "c1"){
              return this.props.c1
            }else if(this.props.radio === "c2"){
              return this.props.c2
            }if(this.props.radio === "c3"){
              return this.props.c3
            }
          })()}
          c1={this.props.c1}
          c2={this.props.c2}
          c3={this.props.c3}
          ColorChange={this.props.ColorChange}
          SaveColor={this.props.SaveColor}
          cp_display={this.props.cp_display}
        />
        <LinksList 
          links={this.props.links}
          HandleClick={this.props.HandleClick}
          DeleteLink={this.props.DeleteLink}
          EditLink={this.props.EditLink}
          dl_display={this.props.dl_display}
          ed_display={this.props.ed_display}
          opacity={this.props.opacity}
          c1={this.props.c1}
          c2={this.props.c2}
          c3={this.props.c3}
        />
        <CSSTransition
          in={this.props.cp_display}
          classNames="CB"
          timeout={1}
        >
          <button className="cp_display"  style={{color:this.props.c3,border:"solid 2px "+ this.props.c3,backgroundColor:this.props.c2,cursor: this.props.opacity ? "default" : "pointer",opacity: this.props.opacity ? 0.5 : 1}}>
            Color Change
            <a onClick={() => this.props.HandleClick("cp")} style={{display: this.props.opacity ? 'none' : ''}}></a>
          </button>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
