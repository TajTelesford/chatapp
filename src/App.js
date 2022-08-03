import './App.css';
import {useState} from 'react'
import Message from './components/Message';
import Textbox from './components/Textbox';
import {io} from 'socket.io-client'
io({path:'/socket', transports: ['websocket']})




function App() {


  const [chatMessage, setMessage] = useState("")
  const [messageLog, setMessageLog] = useState([])

  const socket = io('http://localhost:8000')
  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
  socket.on('connect', ()=>{
  })
// puts the message a user has sent to the chat log so everyone could
// see it
  socket.on('recieve-message', (message)=>{
    setMessageLog([...messageLog, message])
  })


  function handleOnChange(e){
    const val = e.target.value
    setMessage(val)
    console.log(chatMessage);
    console.log(messageLog);
    
  }

  function handleSendMessage(e){
    e.preventDefault()
    socket.emit('send-message', chatMessage)
    setMessage('')
    
  }

  return (
    <div className="App">
      <div className='chat'>
        { messageLog && messageLog.map((message, index)=>{
          return(<Message key={index} text={message}/>)
        })}
      </div>
      <div className='sendmessage'>
        <Textbox onChange={handleOnChange} sendMessage={handleSendMessage} value={chatMessage} />
      </div>
    </div>
  );
}

export default App;
