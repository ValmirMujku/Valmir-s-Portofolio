import React from 'react';
import Programming from './Programming';
import { useEffect } from 'react';
import WebFont from "webfontloader";

export default function Programmings() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Ubuntu Mono"],
      },
    });
  });


  return <div className='container-fluid ' style={{fontFamily:'Ubuntu Mono'}}>
  <div className='d-flex flex-row justify-content-between flex-wrap '>
      <Programming src ='./Images/html5.png' title='HTML5' projects='6' description = 'Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages'/>
      <Programming src ='./Images/css3.png' title='CSS3' projects='3'  description='CSS3 is the latest version of the CSS specification. CSS3 adds several new styling features and improvements to enhance the web presentation capabilities'  />
      <Programming src ='./Images/bootstrap.png' title='BootStrap' projects='3'  description='Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design'  />
      <Programming src ='./Images/javascript.png' title='JavaScript' projects='4'  description='JavaScript, often abbreviated or mentioned JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.  '  />
      <Programming src ='./Images/react.png' title='React' projects='2'  description='React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.'  />
      <Programming src ='./Images/mysql.png' title='MySQL' projects='1'  description='MySQL is an open-source relational database management system. Its name is a combination of  My, name of co-founder Michael Widenius  daughter, and "SQL , the abbreviation for Structured Query Language'  />
      <Programming src ='./Images/sass.png' title='Sass' projects='2'  description='Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.'  />
      <Programming src ='./Images/firebase.png' title='FireBase' projects='1'  description='Is a platform developed by Google for creating mobile and web applications. Originally an independent company founded in 2011. In 2014, Google acquired the platform . '  />
      
  </div>
</div>;
}
