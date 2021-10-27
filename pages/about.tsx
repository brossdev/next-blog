import React from "react";
import Layout from "../components/Layout";

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: "About - Bobby Ross",
      }}
    >
      <h1>About Me</h1>
      <section>
        <p>
          Welcome! I’m Bobby, intentionally or accidentally you have arrived at
          my personal Blog! I’m a software engineer from Glasgow, Scotland, I
          worked in finance for around 14 years before I quit my job and joined
          a coding bootcamp to learn how to code in September 2016. I’ve worked
          in various roles in the tech industry from a Junior Developer in a
          Digital Agency to a Tech Lead in a SASS startup.
        </p>
        <p>
          Learning to code changed my life, like any career there are some
          challenges in Tech, but I truly love what I do, I find being able to
          contribute and create products that can really help people extremely
          rewarding. I’m a little obsessed with learning new technologies and
          building fun projects, I’m continually investigating options for
          improving my developer tools and experience. Not only that, but I’m
          probably one of the very people on the planet who went from VS Code to
          Vim as my main editor, I love being able to navigate everything
          through the keyboard.
        </p>
      </section>
    </Layout>
  );
};

export default About;
