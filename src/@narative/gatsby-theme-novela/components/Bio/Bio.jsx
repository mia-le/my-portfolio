import React, { Component } from 'react';
// use this to link to internal resources/pages
// and the <a> tag for external (outside your site) links
import { Link } from 'gatsby';
import styled from "@emotion/styled"
// it will say unused even if you use it.. idk
import { css } from '@emotion/react';
// An image component provided by the theme makers, used with authors.avatar.XYZ
import Image from '@narative/gatsby-theme-novela/src/components/Image';

/* 
    Example of a styled component.

  So you can do something like styled.div`
    just put your scss/sass code here like this:
  `
*/
const TestHeading = styled.h1`
  color: red;
  font-size: 4em;

  :hover {
    color: yellow;
    font-size: 8em;
  }
`
/*
  then just use it like a normal component
    <TestHeading>Hello how are you</TestHeading
  it will mimic a normal h1 tag
*/

/* Another example using a custom Image component */
const RoundedImage = styled(Image)`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

/* 
  We are using @emotion library which is a CSS-in-JS library
  i.e. we are putting our css right into our javascript

  Look here for more info: https://emotion.sh/docs/css-prop
*/

// Class-style Components
class Bio extends Component {
  render() {
    const { author } = this.props;

    return (
      <div css={{
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* 
            Since we did: import { css } from "@emotion/react" on top,
            we can put css into any component like this:
        */}
        <RoundedImage css={{
          marginRight: '32px',
          ':hover': {
            width: '400px'
          }
        }} src={author.avatar.medium} />
        <div>
          {/* Put your content here */}
          <TestHeading>Hi! I am Minh Anh Le!</TestHeading>
          <a href="static/resume.pdf">My Resume</a>
        </div>
      </div>
    )
  }
}
export default Bio;

// Function-style components
// export default function Bio({ author }) {
//   return (
//     <div css={{
//       display: 'flex',
//       alignItems: 'center'
//     }}>
//       {/* 
//           Since we did: import { css } from "@emotion/react" on top,
//           we can put css into any component like this:
//       */}
//       <RoundedImage css={{
//         marginRight: '32px',
//         ':hover': {
//           width: '400px'
//         }
//       }} src={author.avatar.medium} />
//       <div>
//         {/* Put your content here */}
//         <TestHeading>Hi! I am Minh Anh Le!</TestHeading>
//         <a href="static/resume.pdf">My Resume</a>
//       </div>
//     </div>
//   )
// }

/*
    So how component shadowing works is it replaces a component X that the
    theme has if you also have a component in a corresponding path in your theme
    For example:

      novella-theme has a file at:
        gatsby-theme-novela/@narative/gatsby-theme-novela/src/components/Bio/Bio.tsx
                                                          ^ look this

      so your my-portfolio project needs to have an overriding file at:
        my-portfolio/src/@narative/gatsby-theme-novela/components/Bio/Bio.tsx
                                                      ^ "src" is missing intentionally

      it dont make sense why we remove "src" from the themes folder

    Another point specific to this theme:
      we also override the Bio/index.ts file in this case to say that 
      get the Bio component from our directory/folder instead of the themes
    
    it important! message if it confusing still hehe
    have fun designing your about me section
*/