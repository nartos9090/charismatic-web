export type HistoryItem = {
  created_at: Date | string
  title: string,
  type: 'product_image' | 'copywriting' | 'video',
  id: number
}
