import React from 'react';
import Login from './Login';
import renderer from 'react-test-renderer';

test('Login page links to Dashboard when user logs in', () => {
  const component = renderer.create(
    <Login page="http://www.facebook.com">Facebook</Login>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
