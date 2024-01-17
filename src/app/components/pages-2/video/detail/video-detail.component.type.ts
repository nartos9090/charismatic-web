export type VideoItem = {
  id: number
  user_id: number
  product_title: string
  brand_name: string
  product_type: string
  market_target: string
  superiority: string
  duration: number
}

export type VideoScene = {
  id: number
  video_project_id: number
  sequence: number
  title: string
  narration: string
  illustration: string
  illustration_url: string
  voice_url: string
}
