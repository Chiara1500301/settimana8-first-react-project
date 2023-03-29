import { Component } from "react";
class ImageComponet extends Component{
    render(){
        return(
        <img src={this.props.url} alt={this.props.info} ></img>
        )
    }
}
export default ImageComponet