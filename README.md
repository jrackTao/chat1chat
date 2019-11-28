## react-little-icon
提供一些动态图标控件，比如电池电量、计时器

##### [源码地址(Source address)](https://gitlab.aecg.com.cn/jrackson/react-little-icon)
## 安装（Install）
``` shell
npm install react-little-icon --save
```
## Battery - 电池电量使用（Usage）

#### 参数（props）
> **size：\<String\> 大小，默认 50px，支持 vw, em, rem 单位**

> **percent：\<Number\>（0 - 100）百分比**

> **color：\<String\> 颜色，默认 red**

> gridColor：\<String\> 遮罩格子颜色，默认 #FFF（与图标所在背景色相同时效果最佳）

> type：\<String\> 'default'：有电量格子， 'nogrid'：不显示电量格子

#### 例（example）
``` javascript
import {Battery} from 'react-little-icon'

<Battery size={20} percent={50} color={'rgb(0,0,0)'}>
```
#### 样例（Sample）
##### type = 'default'
![样例](./src/samples/default.png)
##### type = 'nogrid'
![样例](./src/samples/nogrid.png)

## Timer - 计时器使用（Usage）

#### 参数（props）
> **size：\<String\> 大小，默认 50px，支持 vw, em, rem 单位**

> **color：\<String\> 颜色，默认 red**

> **fontColor：\<String\> 字体颜色，默认 red**

> **callback：\<Promise\> 倒计时结束触发回调，AsyncFunction 或 Promise**

> **countDown：\<Number\> 倒计时时间，默认 3**

> onChange：\<Function\> 数字改变触发，默认 空

> running：\<Boolean\> 运行状态，默认 true

> disableClick：\<Boolean\> 是否禁用手动点击，默认 true

> showText：\<Boolean\> 显示文字，默认 true

#### 例（example）
``` javascript
import {Timer} from 'react-little-icon'

<Timer callback={async () => {}} countDown={10}>
```
#### 样例（Sample）
![样例](./src/samples/timer.png)

## 大小（Size）
![大小](./src/size.png)