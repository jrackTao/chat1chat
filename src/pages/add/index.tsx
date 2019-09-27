import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import SearchInput from '@/components/SearchInput'
import BoxCard from '@/components/BoxCard'
import TabBtn from '@/components/TabBtn'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, } from 'taro-ui'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ services }) => ({ services }))
class Index extends Component {
  state = {
    tabOption:[{
      id:0,
      text:'找人',
    },{
      id:1,
      text:'找群',
    }]
  }

  tabOnChange = option => {
    console.log(option);
  } 

  render() {
    const {tabOption} = this.state;
    return (
      <View>
        <TabBtn options={tabOption} onChange={this.tabOnChange}></TabBtn>
        <SearchInput></SearchInput>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>