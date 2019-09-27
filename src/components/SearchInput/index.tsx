import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import className from 'classnames'
import './index.scss'
import { AtInput, AtButton } from 'taro-ui'
// import '../style.scss';

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  state = {
    focus: false,
  }

  render() {
    const { focus } = this.state;
    return (
      <View className="search-input-container">
        <View className={className('search-input-c', { 'init': !focus })} >
          <View className="iconfont icon-search"></View>
          <AtInput
            className="search-input"
            name='search'
            type='text'
            placeholder='搜索'
            onFocus={() => { this.setState({ focus: true }) }}
            onBlur={() => { this.setState({ focus: false }) }}
          // onChange={this.handleChange.bind(this)}
          />
          <AtButton className="search-input-cancel" type='primary' size='small'>取消</AtButton>
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>