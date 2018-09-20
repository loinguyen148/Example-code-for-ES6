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
    `}</style>
    <body>
      <ul>
        <li><a href="/template-string">1. Template String</a></li>
        <li><a href="/callback">2. Callback</a></li>
        <li><a href="/promise">3. Promise</a></li>
      </ul>
    </body>
  </div>


 
