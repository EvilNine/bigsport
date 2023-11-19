interface INewsSource {
  id: number | null
  name: string
}

export interface INews  {
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
  source: INewsSource
}

export interface IData {
  status: string
  totalResults?: number
  articles: INews[]
}
