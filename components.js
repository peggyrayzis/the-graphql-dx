/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { Fragment } from 'react';
import { Image } from 'mdx-deck';
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  width,
  space,
  color,
} from 'styled-system';

import { colors } from './theme';

export const FullScreenBackground = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteBackground = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.white,
});

export const PurpleBackground = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.purple,
  textColor: colors.lilac,
});

export const Emily = () => (
  <p style={{ margin: '0px', fontSize: '24px' }}>
    Art by Emily Griffin (@emilywithcurls)
  </p>
);

export const AlignLeft = styled('div')`
  display: 'flex';
  flex-direction: 'column';
  align-items: 'flex-start';
  justify-content: 'flex-start';
`;

export const Box = styled.div(
  {
    flex: 'none',
    minWidth: 0,
  },
  width,
  space,
  color,
);

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
);

Flex.defaultProps = {
  justifyContent: 'center',
  flexDirection: 'row',
};

export const SplitWhite = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children);
  return (
    <WhiteBackground>
      <Flex
        css={{
          alignItems: 'center',
          height: '100%',
          backgroundColor: colors.white,
        }}
      >
        <Box width={1 / 2}>{a}</Box>
        <Box width={1 / 2}>{rest}</Box>
      </Flex>
    </WhiteBackground>
  );
};

export const LayoutTop = ({ children }) => (
  <div
    css={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

export const TweetSlide = ({ start, end, title }) => (
  <Fragment>
    <h2 css={{ textAlign: 'center', marginTop: '40px 0 40px 0' }}>{title}</h2>
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '64vh',
      }}
    >
      {[...Array(end + 1).keys()].slice(start).map(a => (
        <img
          key={a}
          src={`./img/dx-tweet${a}.png`}
          css={{ width: '900px', borderRadius: '8px' }}
        />
      ))}
    </div>
  </Fragment>
);

// function App() {
//   const [variable, setVariable] = useState('redux');

//   return (
//     <Query>
//       <Fragment>
//         <input
//           type="text"
//           value={variable}
//           onChange={event => setVariable(event.target.value)}
//         />
//         <button
//           type="button"
//           onClick={() =>
//             setUrl(`http://hn.algolia.com/api/v1/search?query=${variable}`)
//           }
//         >
//           Search
//         </button>
//         <ul>
//           <Results data={data} />
//         </ul>
//       </Fragment>
//     </Query>
//   );
// }
