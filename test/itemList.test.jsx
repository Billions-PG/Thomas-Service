import React from 'react';
import ItemList from '../src/components/ItemList';
import { render, mount, shallow } from './enzyme';

describe('should properly render ItemList page', () => {
  let wrapper;

  beforeEach(() => {
    const recommendedMockedItems = {
      shopItems: ['test1', 'test2', 'test3', 'test4'],
      alsoItems: ['test1', 'test2', 'test3', 'test4'],
    };

    wrapper = shallow(<ItemList {...recommendedMockedItems} />);
  });

  test('contains two containers, one for More from this shop, and another for You may also like', () => {
    expect(wrapper.find('Container')).toHaveLength(3);
  });
});
