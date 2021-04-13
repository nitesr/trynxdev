import React from 'react';

import './ui-shared.module.scss';

/* eslint-disable-next-line */
export interface UiSharedProps {}

export function UiShared(props: UiSharedProps) {
  return (
    <div className="ui-shared">
      <div>
        <h1>Welcome to ui-shared!</h1>
      </div>
      <div>
        <h1>Welcome to ui-shared again!</h1>
      </div>
    </div>
  );
}

export default UiShared;
