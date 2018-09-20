import sampleCode from '../statics/sampleCode.json';
const sample = [
  {
    code: `&nbsp;`,
    result: 'This first example for template String'
  }
];


export default () =>
  <div>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </head>
    <style jsx global>{`
      ul {
        list-style: none;
      }

      ul li > a {
        text-decoration: none;
      }

      code {
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

      pre {
        display: inline-block;
      }
    `}</style>
    <body>
      <div>
        <a href="/">Back</a>
        <h3> Template String</h3>
      </div>
      <section>
        <code>
          {sampleCode[0]['code']}
        </code>
        <div>
          <strong>=> </strong>
          <pre>
            {sampleCode[0]['result']}
          </pre>
        </div>
      </section>
    </body>
  </div>


 
