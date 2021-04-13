import React from 'react';

import './ui-public.module.scss';

/* eslint-disable-next-line */
export interface UiPublicProps {}

export function UiPublic(props: UiPublicProps) {
  return (
    <div>
      <div>
        <h1>Welcome to ui-public!</h1>
      </div>
      <div>
        <h1>Welcome to ui-public again!</h1>
      </div>
    </div>
  );
}

export default UiPublic;
