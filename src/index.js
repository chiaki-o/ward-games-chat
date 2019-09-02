import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.js'

// Socket.IOでWebSocketサーバに接続する --- (※1)
import socketio from 'socket.io-client'
const socket = socketio.connect('http://localhost:3001')

// 書き込みフォームのコンポーネント --- (※2)
class ChatForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: '', message: '' , answer: ''}
  }
  nameChanged (e) {
    this.setState({name: e.target.value})
  }
  messageChanged (e) {
    this.setState({message: e.target.value})
  }
  // サーバに名前とメッセージを送信 --- (※3)
  send () {
    if (!new RegExp(/^[あ-わ][ぁ-んー]*[あ-わ]$/).test(this.state.message)){
      alert("文末をあ～わのひらがなで入力して下さい");
      this.setState({message: ''})
      return false;
    }

    socket.emit('chat-msg', {
      name: this.state.name,
      message: this.state.message
    })

    if(this.state.message.slice( -1 ) == 'あ'){
      this.state.answer = 'あいす'
    }

    if(this.state.message.slice( -1 ) == 'い'){
      this.state.answer = 'いす'
    }

    if(this.state.message.slice( -1 ) == 'う'){
      this.state.answer = 'うえき'
    }

    if(this.state.message.slice( -1 ) == 'え'){
      this.state.answer = 'えいご'
    }

    if(this.state.message.slice( -1 ) == 'お'){
      this.state.answer = 'おもちゃ'
    }

    if(this.state.message.slice( -1 ) == 'か'){
      this.state.answer = 'かぎ'
    }

    if(this.state.message.slice( -1 ) == 'き'){
      this.state.answer = 'きつつき'
    }

    if(this.state.message.slice( -1 ) == 'く'){
      this.state.answer = 'くるま'
    }

    if(this.state.message.slice( -1 ) == 'け'){
      this.state.answer = 'けいたいでんわ'
    }

    if(this.state.message.slice( -1 ) == 'こ'){
      this.state.answer = 'こんぶ'
    }

    if(this.state.message.slice( -1 ) == 'が'){
      this.state.answer = 'がいこく'
    }

    if(this.state.message.slice( -1 ) == 'ぎ'){
      this.state.answer = 'ぎんこう'
    }

    if(this.state.message.slice( -1 ) == 'ぐ'){
      this.state.answer = 'ぐみ'
    }

    if(this.state.message.slice( -1 ) == 'げ'){
      this.state.answer = 'げーむ'
    }

    if(this.state.message.slice( -1 ) == 'ご'){
      this.state.answer = 'ごりら'
    }

    if(this.state.message.slice( -1 ) == 'さ'){
      this.state.answer = 'さとう'
    }

    if(this.state.message.slice( -1 ) == 'し'){
      this.state.answer = 'しかく'
    }

    if(this.state.message.slice( -1 ) == 'す'){
      this.state.answer = 'すまいる'
    }

    if(this.state.message.slice( -1 ) == 'せ'){
      this.state.answer = 'せなか'
    }

    if(this.state.message.slice( -1 ) == 'そ'){
      this.state.answer = 'そばかす'
    }

    if(this.state.message.slice( -1 ) == 'ざ'){
      this.state.answer = 'ざらめ'
    }

    if(this.state.message.slice( -1 ) == 'じ'){
      this.state.answer = 'じてんしゃ'
    }

    if(this.state.message.slice( -1 ) == 'ず'){
      this.state.answer = 'ずけい'
    }

    if(this.state.message.slice( -1 ) == 'ぜ'){
      this.state.answer = 'ぜんまい'
    }

    if(this.state.message.slice( -1 ) == 'ぞ'){
      this.state.answer = 'ぞんび'
    }

    if(this.state.message.slice( -1 ) == 'た'){
      this.state.answer = 'たまねぎ'
    }

    if(this.state.message.slice( -1 ) == 'ち'){
      this.state.answer = 'ちきゅう'
    }

    if(this.state.message.slice( -1 ) == 'つ'){
      this.state.answer = 'つぼみ'
    }

    if(this.state.message.slice( -1 ) == 'て'){
      this.state.answer = 'てすと'
    }

    if(this.state.message.slice( -1 ) == 'と'){
      this.state.answer = 'とんねる'
    }

    if(this.state.message.slice( -1 ) == 'だ'){
      this.state.answer = 'だいす'
    }

    if(this.state.message.slice( -1 ) == 'づ'){
      this.state.answer = 'づく'
    }

    if(this.state.message.slice( -1 ) == 'で'){
      this.state.answer = 'でんき'
    }

    if(this.state.message.slice( -1 ) == 'ど'){
      this.state.answer = 'どりる'
    }

    if(this.state.message.slice( -1 ) == 'な'){
      this.state.answer = 'なりたくうこう'
    }

    if(this.state.message.slice( -1 ) == 'に'){
      this.state.answer = 'にんにく'
    }

    if(this.state.message.slice( -1 ) == 'ぬ'){
      this.state.answer = 'ぬま'
    }

    if(this.state.message.slice( -1 ) == 'ね'){
      this.state.answer = 'ねこ'
    }

    if(this.state.message.slice( -1 ) == 'の'){
      this.state.answer = 'のり'
    }

    if(this.state.message.slice( -1 ) == 'は'){
      this.state.answer = 'はんどる'
    }

    if(this.state.message.slice( -1 ) == 'ひ'){
      this.state.answer = 'ひよこ'
    }

    if(this.state.message.slice( -1 ) == 'ふ'){
      this.state.answer = 'ふぁいる'
    }

    if(this.state.message.slice( -1 ) == 'へ'){
      this.state.answer = 'へんどう'
    }

    if(this.state.message.slice( -1 ) == 'ほ'){
      this.state.answer = 'ほたて'
    }

    if(this.state.message.slice( -1 ) == 'ば'){
      this.state.answer = 'ばつ'
    }

    if(this.state.message.slice( -1 ) == 'び'){
      this.state.answer = 'びーち'
    }

    if(this.state.message.slice( -1 ) == 'ぶ'){
      this.state.answer = 'ぶらっく'
    }

    if(this.state.message.slice( -1 ) == 'べ'){
      this.state.answer = 'べんとう'
    }

    if(this.state.message.slice( -1 ) == 'ぼ'){
      this.state.answer = 'ぼでぃーがーど'
    }

    if(this.state.message.slice( -1 ) == 'ぱ'){
      this.state.answer = 'ぱっく'
    }

    if(this.state.message.slice( -1 ) == 'ぴ'){
      this.state.answer = 'ぴあの'
    }

    if(this.state.message.slice( -1 ) == 'ぷ'){
      this.state.answer = 'ぷーどる'
    }

    if(this.state.message.slice( -1 ) == 'ぺ'){
      this.state.answer = 'ぺっと'
    }

    if(this.state.message.slice( -1 ) == 'ぽ'){
      this.state.answer = 'ぽけっと'
    }

    if(this.state.message.slice( -1 ) == 'ま'){
      this.state.answer = 'ますく'
    }

    if(this.state.message.slice( -1 ) == 'み'){
      this.state.answer = 'みらい'
    }

    if(this.state.message.slice( -1 ) == 'む'){
      this.state.answer = 'むしめがね'
    }

    if(this.state.message.slice( -1 ) == 'め'){
      this.state.answer = 'めいろ'
    }

    if(this.state.message.slice( -1 ) == 'も'){
      this.state.answer = 'もなりざ'
    }

    if(this.state.message.slice( -1 ) == 'や'){
      this.state.answer = 'やさい'
    }

    if(this.state.message.slice( -1 ) == 'ゆ'){
      this.state.answer = 'ゆうぐれ'
    }

    if(this.state.message.slice( -1 ) == 'よ'){
      this.state.answer = 'ようふく'
    }
    
    if(this.state.message.slice( -1 ) == 'ら'){
      this.state.answer = 'らっぱ'
    }

    if(this.state.message.slice( -1 ) == 'り'){
      this.state.answer = 'りんご'
    }

    if(this.state.message.slice( -1 ) == 'る'){
      this.state.answer = 'るーる'
    }

    if(this.state.message.slice( -1 ) == 'れ'){
      this.state.answer = 'れたす'
    }

    if(this.state.message.slice( -1 ) == 'ろ'){
      this.state.answer = 'ろじっく'
    }

    if(this.state.message.slice( -1 ) == 'わ'){
      this.state.answer = 'わかば'
    }


    socket.emit('chat-msg', {
      name: 'system',
      message: this.state.answer
    })
    this.setState({message: ''}) // フィールドをクリア
    this.setState({answer: ''}) // フィールドをクリア
  }
  render () {
    return (
      <div style={styles.form}>
        名前:<br />
        <input value={this.state.name}
          onChange={e => this.nameChanged(e)} /><br />
        メッセージ:<br />
        <input value={this.state.message}
          onChange={e => this.messageChanged(e)} /><br />
        <button onClick={e => this.send()}>送信</button>
      </div>
    )
  }
}

// チャットアプリのメインコンポーネント定義 --- (※4)
class ChatApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      logs: []
    }
  }
  // コンポーネントがマウントされたとき --- (※5)
  componentDidMount () {
    // リアルタイムにログを受信するように設定
    socket.on('chat-msg', (obj) => {
      const logs2 = this.state.logs
      obj.key = 'key_' + (this.state.logs.length + 1)
      console.log(obj)
      logs2.unshift(obj) // 既存ログに追加
      this.setState({logs: logs2})
    })
  }
  render () {
    // ログ一つずつの描画内容を生成 --- (※6)
    const messages = this.state.logs.map(e => (
      <div key={e.key} style={styles.log}>
        <span style={styles.name}>{e.name}</span>
        <span style={styles.msg}>: {e.message}</span>
        <p style={{clear: 'both'}} />
      </div>
    ))
    return (
      <div>
        <h1 style={styles.h1}>チャットでしりとり</h1>
        <ChatForm />
        <div>{messages}</div>
      </div>
    )
  }
}

// DOMにメインコンポーネントを書き込む
ReactDOM.render(
  <ChatApp />,
  document.getElementById('root'))
