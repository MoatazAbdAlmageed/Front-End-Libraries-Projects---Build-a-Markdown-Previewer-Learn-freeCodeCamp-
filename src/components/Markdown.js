import React, {Component} from 'react';
// const ReactMarkdown = require('react-markdown')

import marked from 'marked';


// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
    breaks: true,
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
}


export class Markdown extends Component {

    constructor(props) {

        super(props);

        this.state = {
            input: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`,
        };


    }


    componentDidMount() {
        /*add id  = preview */
        // var element = document.getElementsByClassName("preview")[0];
        // element.id = 'preview'
    }


    handleTypeChange = (e) => {
        const input = e.target.value;
        this.setState({input})
    }

    getMarkdownText() {
        var rawMarkup = marked(this.state.input, {sanitize: true});
        return { __html: rawMarkup };
    }
    render() {

        const markedElement =<div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}></div>



        const spinner = <div className="spinner"></div>;

        return (
            <div className="Main">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea value={this.state.input} onChange={this.handleTypeChange} className="form-control" rows="5" id="editor"></textarea>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="form-group">

                                { this.state.input? markedElement : spinner }


                            </div>
                        </div>
                    </div>
            </div>
        );
    }


}

export default Markdown;
