import * as React from 'react';
import { Props } from './../interfaces/index';

function Layout(props: React.PropsWithChildren<Props>) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />

        <link rel="stylesheet" href="/admin/css/style.css" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

        <title>Admin panel{props.title ? ` - ${props.title}` : ''}</title>
      </head>
      <body
        style={{ background: '#212121', fontFamily: 'Roboto', color: '#fff' }}
      >
        <main>
          <div className="container">{props.children}</div>
        </main>

        <script src="/admin/js/main.js"></script>
      </body>
    </html>
  );
}

Layout.defaultProps = {
  title: 'Page',
};

export default Layout;
