import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import First from './first/First';
import Second from './second/second';
import Third from './third/third';

const tabs = [
  { title: <Badge>First Tab</Badge> },
  { title: <Badge>Second Tab</Badge> },
  { title: <Badge>Third Tab</Badge> },
];

const TabExample = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      //tabBarActiveTextColor={'green'}
      //tabBarUnderlineStyle={{backgroudColor:'green'}}
      //page={5}

    >
      <div style={{ display: 'flex', backgroundColor: '#fff' }}>
        <First/>
      </div>
      <div style={{ display: 'flex', backgroundColor: '#fff' }}>
        <Second/>
      </div>
      <div style={{ display: 'flex', backgroundColor: '#fff' }}>
        <Third/>
      </div>
    </Tabs>

  </div>
);

export default (TabExample)