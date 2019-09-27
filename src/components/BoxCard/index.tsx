import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtNavBar, AtAvatar, AtInput, AtBadge } from 'taro-ui'

type PageStateProps = {}
type Data = {
  avatar: string,
  name: string,
  text: string,
}

type PageDispatchProps = {
  data: Data,
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  state = {

  }

  render() {
    const { data, children } = this.props;
    return (
      <View className="boxcard-c">
        <View className="boxcard-l">
          <AtAvatar circle size="18" image={data.avatar}></AtAvatar>
        </View>
        <View className="boxcard-r">
          <View className="boxcard-n">{data.name}</View>
          <View className="boxcard-v">{data.text}</View>
        </View>
        <View className="boxcard-t">
          {children}
        </View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>