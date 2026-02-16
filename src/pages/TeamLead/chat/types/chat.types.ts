export type Message = {
  id: string
  channelId: string
  senderId: string
  senderName: string
  senderAvatar?: string
  content: string
  timestamp: string
  attachments?: Attachment[]
  isCurrentUser?: boolean
}

export type Attachment = {
  id: string
  name: string
  type: 'image' | 'document' | 'video' | 'other'
  size: string
  url: string
}

export type Channel = {
  id: string
  name: string
  projectName: string
  unreadCount: number
  lastMessage?: string
  lastMessageTime?: string
  memberCount: number
}

export type ChatFilters = {
  searchQuery: string
  selectedChannel: string
}
