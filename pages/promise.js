import sampleCode from '../statics/sampleCode/promise.json';
import CodeSection from '../components/code.js';

const globalCSS = `
    ul {
        list-style: none;
    }

    ul li > a {
        text-decoration: none;
    }

    .code {
        background-color: #ececec;
        border-radius: 3px;
        padding: 5px;
        color: #2467c5;
        font-family: courier, monospace;
        white-space: pre-wrap;
        text-align: left;
    }

    section {
        background: #f7f7f7;
        border: 1px solid #d4d4d4;
        padding: 15px;
        margin: 20px;
    }

    section > div {
        margin-top: 15px;
    }

    section div.result {
        max-width: 100%;
    }

    section div.result  div {
        display: inline-block;
        font-style: italic;
        white-space: pre-wrap;
    }

    section div.result > strong {
        margin-top: 10px;
        margin-right: 20px;
        display: inline-block;
    }
`;

const render = () => {
    return <div>
        <style>{globalCSS}</style>
        <div>
            <div>
                <a href="/">Back</a>
                <h3> Promise</h3>
            </div>
            {
                sampleCode.map((item, index) => {
                    return <CodeSection key={index} code={item.code} result={item.result}></CodeSection>
                })
            }
        </div>
    </div>
};

export default render

