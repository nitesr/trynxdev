import { render } from '@testing-library/react';

import UiPublic from './ui-public';

describe('UiPublic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPublic />);
    expect(baseElement).toBeTruthy();
  });
});
