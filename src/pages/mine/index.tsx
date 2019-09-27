import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import { AtButton, AtAvatar, AtList, AtListItem } from 'taro-ui'
import '../style.scss';

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

  }

  render() {
    return (
      <View className="mine-c">
        <View className="mine-info">
          <View className="info-l">
            <AtAvatar circle size="large" image={"https://jdc.jd.com/img/200"}></AtAvatar>
          </View>
          <View className="info-r">
            <View className="name">Jrack</View>
            <View className="id">IM号: 221919</View>
          </View>
          <View>
            
          </View>
        </View>
        <AtList className="mt-2">
          <AtListItem title='相册' arrow='right' iconInfo={{
            size:
              25, color: '#78A4FA', value: 'calendar',
          }} />
          <AtListItem title='支付'
            arrow='right' iconInfo={{
              size: 25,
              color: '#FF4949', value: 'bookmark',
            }} />
        </AtList>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>