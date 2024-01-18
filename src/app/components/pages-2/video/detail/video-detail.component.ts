import {Component} from '@angular/core'
import {VideoItem, VideoScene} from './video-detail.component.type'
import {ActivatedRoute} from '@angular/router'
import {ApiService} from '../../../../services/api/api.service'

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.scss',
})
export class VideoDetailComponent {

  loading = false;

  videoId: number = 0;

  item: VideoItem = null

  scenes: VideoScene[] = []

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.videoId = this.route.snapshot.params['video_id'];
    this.fetch()
  }

  async fetch() {
    this.loading = true
    try {
      const { data } = await this.apiService.axios.get(`/v1/video-project/detail/${this.videoId}`)

      const {scenes, ...item} = data.data
      this.item = item
      this.scenes = scenes
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  }
}
