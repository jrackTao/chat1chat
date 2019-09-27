import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Home from './pages/message'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/message/index',
      'pages/chat/index',
      'pages/contact/index',
      'pages/mine/index',
      'pages/add/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#b0b3bf',
      selectedColor: '#35aaf9',
      backgroundColor: '#fefeff',
      list: [
        {
          text: '消息',
          pagePath: 'pages/message/index',
          iconPath: './assets/xiaoxi-0.png',
          selectedIconPath: './assets/xiaoxi-1.png',
        },
        {
          text: '联系人',
          pagePath: 'pages/contact/index',
          iconPath: './assets/lianxiren-0.png',
          selectedIconPath: './assets/lianxiren-1.png',
        },
        {
          text: '我',
          pagePath: 'pages/mine/index',
          iconPath: './assets/wo-0.png',
          selectedIconPath: './assets/wo-1.png',
        },
      ]
    },
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
