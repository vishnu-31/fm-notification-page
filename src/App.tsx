import { Notification } from "./Notifcation"

const NotificationList =[{
  unread:true,
  avatar:"/images/avatar-mark-webber.webp",
  username:"Mark Webber",
  message:"reacted to your recent post",
  link: "My first tournament today!",
  time:"1m ago"
},{
  unread:true,
  avatar:"/images/avatar-angela-gray.webp",
  username:"Angela Gray",
  message:"followed you",
  time:"5m ago"
},{
  unread:true,
  avatar:"/images/avatar-jacob-thompson.webp",
  username:"Jacob Thompson",
  message:"has jopined your group",
  link: "Chess Club",
  time:"1 day ago"
},{
  unread:true,
  avatar:"/images/avatar-rizky-hasanuddin.webp",
  username:"Rizky Hasanuddin",
  message:"sent you a private message",
  time:"5 days ago",
  taggedMessage:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
},{
  unread:true,
  avatar:"/images/avatar-kimberly-smith.webp",
  username:"Kimberly Smith",
  message:"commented on your picture",
  time:"1 week ago"
},{
  unread:true,
  avatar:"/images/avatar-nathan-peterson.webp",
  username:"Nathan Peterson",
  message:"reacted to your recent post",
  link: "5 end-game strategies to increase your win rate",
  time:"2 weeks ago"
},{
  unread:true,
  avatar:"/images/avatar-anna-kim.webp",
  username:"Anna Kim",
  message:"left the group",
  link: "Chess Club",
  time:"2 weeks ago"
},
]


function App() {

  return (
    <main className='bg-white rounded w-screen min-h-screen p-5 justify-center lg:w-[40em] lg:min-h-fit'>
      <div className="flex justify-between">
        <div className='flex'><h1 className='font-bold text-xl'>Notfications</h1><span className='mx-3 px-3 text-white rounded-lg bg-blue-900'>3</span></div>
        <button className='text-gray-500 hover:text-blue-400' type="button">Mark all as read</button>
      </div>
      <div className="flex flex-col w-full my-3">
        {NotificationList.map(item,idx) =>(
          <Notification key={idx} {..item}/>
        )}
        
      </div>
    </main>
  )
}

export default App
