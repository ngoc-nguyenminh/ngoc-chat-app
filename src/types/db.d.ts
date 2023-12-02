interface User {
  name: string;
  email: string;
  image: string;
  id: string;
}

interface Chat {
  id: tring;
  message: Message[];
}

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: number;
}

interface FriendRequest {
  id: string;
  senderId: string;
  receiverId: string;
}
