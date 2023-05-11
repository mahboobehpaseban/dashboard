import React from 'react'
import './Home.css'
import Features from '../../components/features/Features'
import Chart from '../../components/chart/Chart'
import { xAxisData } from '../../datas'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className="home activ">
    <Features/>
    <Chart  grid title="Month Sale" data={xAxisData} dataKey="Sale" />
    <div className="homeWidgets">
      <WidgetSm />
      <WidgetLg />
    </div>
    </div>    
  )
}
