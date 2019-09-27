import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import className from 'classnames'
import './index.scss'
import { AtNavBar, AtAvatar, AtInput } from 'taro-ui'
import '../style.scss';
import telIcon from '@/assets/tel.png'

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
  constructor(props) {
    super(props)
    this.windowHeight = Taro.getSystemInfoSync().windowHeight
  }
  state = {
    list: [{
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '老朱真帅',
      selfSend: false,
    }, {
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '笪君啊上课笪君啊上帝啊睡觉滴哦几千万低价我ID就我idsakdjaslkjdqwiodjiqow',
      selfSend: false,
    }, {
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '老朱真帅',
      selfSend: true,
    }, {
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '啥叫客户撒娇看会书都好似 u 的期望很对吴浩屌撒娇看差点吴启华都无 i 好的洒进的看到啊快就难受',
      selfSend: true,
    }, {
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '啥叫客户撒娇看会书都好似 u 的期望很对吴浩屌撒娇看差点吴启华都无 i 好的洒进的看到啊快就难受',
      selfSend: true,
    }, {
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '啥叫客户撒娇看会书都好似 u 的期望很对吴浩屌撒娇看差点吴启华都无 i 好的洒进的看到啊快就难受',
      selfSend: true,
    }, {
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '啥叫客户撒娇看会书都好似 u 的期望很对吴浩屌撒娇看差点吴启华都无 i 好的洒进的看到啊快就难受',
      selfSend: true,
    }, {
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '啥叫客户撒娇看会书都好似 u 的期望很对吴浩屌撒娇看差点吴启华都无 i 好的洒进的看到啊快就难受',
      selfSend: true,
    }, {
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '啥叫客户撒娇看会书都好似 u 的期望很对吴浩屌撒娇看差点吴启华都无 i 好的洒进的看到啊快就难受',
      selfSend: true,
    }, {
      avater: 'https://jdc.jd.com/img/200',
      nickName: '吗啡',
      value: '老朱真帅',
      selfSend: false,
    },
    ],
  }

  render() {
    const { list } = this.state;
    return (
      <View>
        <AtNavBar
          onClickLeftIcon={() => { Taro.navigateBack() }}
          color='#000'
          title='Golang社区(4)'
          leftIconType='chevron-left white-color'
        >
          <View>Taro UI</View>
        </AtNavBar>

        <ScrollView
          style={{
            height: `calc(${this.windowHeight}px - ${Taro.pxTransform(308)})`
          }}
          className="chat-scroll" scrollY >
          <View className="chat-c">
            {
              list.map(item =>
                <View className={className('chat-i', { self: item.selfSend })} >
                  <View className="chat-l">
                    <AtAvatar circle size="small" image={item.avater}></AtAvatar>
                  </View>
                  <View className="chat-r">
                    <View className="chat-name">{item.nickName}</View>
                    <View className="chat-text">
                      <View className="chat-text-bg">
                        <Image src={telIcon} className="tel-img"></Image>
                        <Text>{item.value}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }
          </View>
        </ScrollView>

        <View className="footer">
          <View className="input-c">
            <AtInput
              name='value1'
              type='text'
              placeholder='单行文本'
            // value={this.state.value1}
            // onChange={this.handleChange.bind(this)}
            />
          </View>
          <View className="more-c">
            <View className="more-icon">
              {
                ['yuyin', 'tupian', 'xiangji', 'hongbao', 'biaoqing', 'tianjia'].map(icon =>
                  <View className={className('iconfont', 'icon', 'icon-' + icon)}></View>
                )
              }
            </View>
          </View>
        </View>
      </View >
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>