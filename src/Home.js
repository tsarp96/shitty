import React from "react";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            textAreaValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ textAreaValue: event.target.value });
    }

    render() {
        return (
            <div id="home-container">
                <div id="shit-post-sender-container">
                     <textarea id="shit-post-text-area"
                               value={this.state.textAreaValue}
                               onChange={this.handleChange}
                               placeholder="shit post"
                               rows={5}
                     />
                    <div id="home-button">
                        <img src="http://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_grande.png?v=1571606036" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;