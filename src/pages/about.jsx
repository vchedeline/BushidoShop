import React from "react";
import Layout from "../components/Layouts/Layout";
import SubHeader from "../components/Layouts/SubHeader";
import "../styles/about.sass";

export default function About() {
  return (
    <Layout>
      <SubHeader />
      <div className="about-content">
        <h2>About Bushido Shop</h2>
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cum sociis
          natoque penatibus et magnis dis parturient. Egestas pretium aenean
          pharetra magna ac placerat. Dui vivamus arcu felis bibendum ut.
          Consectetur adipiscing elit duis tristique. Tellus integer feugiat
          scelerisque varius morbi enim nunc faucibus. Nulla at volutpat diam ut
          venenatis tellus in metus vulputate. Eu scelerisque felis imperdiet
          proin. Urna condimentum mattis pellentesque id nibh. Eu feugiat
          pretium nibh ipsum consequat nisl vel. Interdum varius sit amet
          mattis. Quis commodo odio aenean sed adipiscing diam donec adipiscing.
          Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque.
          Orci phasellus egestas tellus rutrum tellus pellentesque eu.
          <br />
          <br />
        </p>
        <h5>Fringilla ut morbi tincidunt augue interdum velit euismod</h5>
        <p>
          Fringilla ut morbi tincidunt augue interdum velit euismod. Sed viverra
          ipsum nunc aliquet bibendum. Vitae proin sagittis nisl rhoncus mattis
          rhoncus urna. Orci ac auctor augue mauris augue neque gravida in. Vel
          quam elementum pulvinar etiam non quam. Aliquet nibh praesent
          tristique magna. Pharetra et ultrices neque ornare aenean euismod
          elementum nisi quis. Tortor vitae purus faucibus ornare suspendisse
          sed. Sed pulvinar proin gravida hendrerit lectus a. Ut tortor pretium
          viverra suspendisse potenti nullam ac tortor vitae. Morbi enim nunc
          faucibus a. Sit amet nulla facilisi morbi tempus iaculis urna.
          Scelerisque eu ultrices vitae auctor eu augue ut lectus. Egestas
          integer eget aliquet nibh praesent tristique magna sit. Aliquam
          eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
        </p>
      </div>
    </Layout>
  );
}
