import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import className from 'classnames'
import { AtButton, } from 'taro-ui'

type PageStateProps = {}

type PageDispatchProps = {
}

type PageOwnProps = {
  options: [],
  onChange: option => void,
}

type PageState = {
  selected: number,
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {
  state = {
    selected: 0,
  }

  handleClick = (option, index) => () => {
    this.setState({
      selected: index,
    });
    this.props.onChange(option);
  }

  render() {
    const { options } = this.props;
    const { selected } = this.state;
    return (
      <ScrollView className="tab-container" scrollX>
        <View className="tab-btn-c">
          {
            options.map((option, index) =>
              <View className="tab-btn-i">
                <AtButton onClick={this.handleClick(option, index)} className={className('tab-btn', { 'active': selected === index })} size="small">{option.text}</AtButton>
              </View>
            )
          }
        </View>
      </ScrollView>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>