import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import SearchInput from '@/components/SearchInput'
import BoxCard from '@/components/BoxCard'
import './index.scss'
import { AtNavBar, AtAvatar, AtInput, AtBadge } from 'taro-ui'
import '../style.scss';

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.windowHeight = Taro.getSystemInfoSync().windowHeight
  }

  state = {
    list: [
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
      {
        name: 'Golang社区',
        avatar: 'https://jdc.jd.com/img/200',
        text: '老朱很帅，大家都知道',
        time: '下午5:24',
        hint: 2,
      },
    ]
  }

  goToChat = () => {
    Taro.navigateTo({
      url: '/pages/chat/index',
    })
  }

  render() {
    const { list } = this.state;
    return (
      <View className="ms-container">
        <AtNavBar
          onClickLeftIcon={this.handleClick}
          color='#000'
          title='消息'
        >
          <View>Taro UI</View>
        </AtNavBar>
        <ScrollView
          style={{
            height: `calc(${this.windowHeight}px - ${Taro.pxTransform(190)})`
          }}
          scrollY>
          <SearchInput></SearchInput>
          {
            list.map(item =>
              <View className="message-i" onClick={this.goToChat}>
                <BoxCard data={item}>
                  <View className="time">{item.time}</View>
                  <View className="hint">
                    <View className="badge">{item.hint}</View>
                  </View>
                </BoxCard>
              </View>
            )
          }

        </ScrollView>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>