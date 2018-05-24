import React from 'react';

import './dashboard.scss';
import DonutChart from '../DonutChart/DonutChart'

export default () => (
  <div className="widget">
      <DonutChart value={457} maxValue={700} size={342} strokewidth={8} />
  </div>
);
