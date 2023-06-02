import React from 'react';
import Typography from './Typography';

export default {
  title: 'Typography',
  component: Typography,
};

const typographyStyles = {
    
title1: `
    font-size: 62px;
    line-height: 72px;
`,
title2: `
    font-size: 48px;
    line-height: 56px;
`,
title3: `
    font-size: 40px;
    line-height: 48px;
`,
title4: `
    font-size: 32px;
    line-height: 40px;
`,
title5: `
    font-size: 24px;
    line-height: 32px;
`,
body: `
    font-size: 16px;
    line-height: 24px;
`,
label: `
    font-size: 14px;
    line-height: 24px;
`,
caption: `
    font-size: 12px;
    line-height: 16px;
`,
small: `
    font-size: 10px};
    line-height: 12px;
`,
overline: `
    font-size: 11px;
    line-height: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
`
  };


export const DefaultTypography = () => {
  const title1Style = typographyStyles.title1;

  return (
    <Typography style={title1Style}>
      Hello, World!
    </Typography>
  );
};
