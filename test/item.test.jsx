/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Item from '../src/components/Item';
import { shallow } from './enzyme';

describe('should properly render Item page', () => {
  let wrapper;

  beforeEach(() => {
    const recommendedMockedItems = {
      item: {
        name: 'punisher',
        imageUrl: 'htt://someurl.com',
        shopName: 'marvel',
        price: {
          display: '$40.00',
          worth: 40.00,
          onSale: true,
          salePercentage: 0.20,
          salePrice: '32.00',
        },
        shipping: {
          display: 'Free shipping eligible',
          eligibility: true,
        },
      },
    };

    wrapper = shallow(<Item {...recommendedMockedItems} />);
  });

  test('contains two containers, one for More from this shop, and another for You may also like', () => {
    expect(wrapper.find('Card')).toHaveLength(1);
  });
});
