import React from 'react';
import { shallow } from 'enzyme';

import DonutChart from './DonutChart';

describe('DonutChart', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DonutChart value={100} maxValue={200} size={300} />);
  });

  it('renders DonutChart', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders overlay', () => {
    expect(wrapper.find('#overlay')).toHaveLength(1);
  });

  it('renders chart content', () => {
    expect(wrapper.find('#donutchart')).toHaveLength(1);
  });

  it('renders chart circle in correct size', () => {
    expect(wrapper.find('svg').props().width).toEqual(300);
    expect(wrapper.find('svg').props().height).toEqual(300);
  });

  it('renders static chart text', () => {
    expect(wrapper.contains(<div className="donutchart-text-title">Your credit score is</div>)).toEqual(true);
    expect(wrapper.find('.donutchart-text-out-of').text()).toEqual("out of 200");
  });

  it('renders dynamic chart value before and after completed sequence', () => {
    expect(wrapper.find('.donutchart-text-val').text()).toEqual("0");

    wrapper.instance().nextStep(60)
    wrapper.update()

    expect(wrapper.find('.donutchart-text-val').text()).toEqual("100");
  });

  it('renders dynamic chart percentage before and after completed sequence', () => {
    expect(wrapper.find('.donutchart-text-percent').text()).toEqual("0%");

    wrapper.instance().nextStep(60)
    wrapper.update()
    
    expect(wrapper.find('.donutchart-text-percent').text()).toEqual("50%");
  });

  it('restarts sequence when component will unmount and mount again', () => {
    expect(wrapper.find('.donutchart-text-percent').text()).toEqual("0%");

    wrapper.instance().nextStep(60)
    wrapper.update()
    expect(wrapper.find('.donutchart-text-percent').text()).toEqual("50%");

    wrapper.instance().componentWillUnmount()
    wrapper.instance().componentWillMount()
    wrapper.update()
    expect(wrapper.find('.donutchart-text-percent').text()).toEqual("0%");
  });
});
