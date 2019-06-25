import React from 'react';

import { RssPanelEditor } from './RssPanelEditor';
import { PanelEditorProps } from '@grafana/ui';
import { RssOptions } from '../types';

import { render } from '@testing-library/react';

const setup = (propOverrides?: Partial<PanelEditorProps<RssOptions>>) => {
  const props: PanelEditorProps<RssOptions> = {
    options: {
      feedUrl: 'some/url',
    },
    onOptionsChange: jest.fn(),
  };

  Object.assign(props, propOverrides);
  const { asFragment, container } = render(<RssPanelEditor {...props} />);
  return { asFragment, container };
};

describe('Render', () => {
  it('should render component', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});
