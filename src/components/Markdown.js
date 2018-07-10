import React, {Component} from 'react';

const ReactMarkdown = require('react-markdown')


export class Markdown extends Component {

    constructor(props) {

        super(props);

        this.state = {
            input: '# Hello',
        };


    }


    componentDidMount() {
        /*add id  = preview */
        var element = document.getElementsByClassName("preview")[0];
        element.id = 'preview'
    }


    handleTypeChange = (e) => {
        const input = e.target.value;
        this.setState({input,output:input})
    }


    render() {

        const marked = <ReactMarkdown className={'preview'} source={this.state.input} />



        const spinner = <div className="spinner"></div>;

        return (
            <div className="Youtube">

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea value={this.state.input} onChange={this.handleTypeChange} className="form-control" rows="5" id="editor"></textarea>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="form-group">

                                { this.state.input? marked : spinner }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Markdown;
