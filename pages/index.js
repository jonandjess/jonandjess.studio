import React, { Fragment } from 'react'
import Head from 'next/head'

export default () => {
  return (<Fragment>
    <Head>
      <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>
    </Head>
    <div className='index'>
      <a href='mailto:hello@jonandjess.studio'>say hey!</a>
      <img src='/static/logotype.svg' />
      <h1>We are a creative and engineering studio led by <span className='jon'>Jon</span> and <span className='jess'>Jess</span>.</h1>
    </div>

    <style jsx>{`
      .index {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }

      a {
        display: inline-block;
        border: 2px solid black;
        border-radius: 8px;
        padding: 8px 25px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
        color: black;
        position: absolute;
        top: 27px;
        right: 27px;
      }
      a:hover {
        box-shadow: 2px 2px black;
      }
      a:active {
        transform: translate(2px, 2px);
        box-shadow: none;
      }

      img {
        width: 100%;
        max-width: 400px;
      }

      h1 {
        text-align: center;
      }
      /*
      span.jon {
        color: #00599A;
        font-weight: 700;
      }

      span.jess {
        color: #F05E22;
        font-weight: 700;
      }*/
    `}</style>

    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700');

      body {
        margin: 0;
        padding: 0 10px;
      }
      h1 {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 300;
      }
    `}</style>
  </Fragment>)
}
