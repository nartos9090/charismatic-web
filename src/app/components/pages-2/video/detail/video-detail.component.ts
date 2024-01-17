import {Component} from '@angular/core'
import {VideoItem, VideoScene} from './video-detail.component.type'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.scss',
})
export class VideoDetailComponent {

  videoId: number = 0;

  items: VideoItem = {
    id: 12,
    user_id: 1,
    product_title: 'AquaVita',
    brand_name: 'PureFlow',
    product_type: 'Air Mineral Murni',
    market_target: 'Semua Usia dan Gaya Hidup Sehat',
    superiority: 'Sumber Air Alamiah: AquaVita berasal dari mata air alamiah yang kaya mineral, memberikan keaslian dan kesegaran yang unik. \nProses Pemurnian Tinggi: Menggunakan teknologi canggih untuk menjaga kebersihan dan kemurnian air, memastikan kualitas terbaik untuk konsumen.\n Kemasan Ramah Lingkungan: Botol yang dapat didaur ulang dan ramah lingkungan, mendukung komitmen kami terhadap keberlanjutan. \nKandungan Mineral Optimal: Mengandung sejumlah mineral esensial untuk keseimbangan tubuh, memenuhi kebutuhan harian nutrisi Anda.\nRasa Alami: Tidak ada tambahan bahan kimia atau perasa buatan, AquaVita memberikan sensasi rasa alami air mineral segar.\nDesain Modern: Kemasan yang elegan dan praktis, cocok untuk gaya hidup aktif dan sibuk.\n Dukungan Kesehatan: Dengan konsumsi rutin, AquaVita membantu menjaga hidrasi optimal, mendukung fungsi organ, dan meningkatkan kesehatan secara keseluruhan.',
    duration: 60,
  }

  scenes: VideoScene[] = [
    {
      'id': 61,
      'video_project_id': 12,
      'sequence': 1,
      'title': 'Keindahan Alam',
      'narration': 'Berawal dari sumber mata air alamiah nan elok, AquaVita hadir dengan segala kemurniannya.',
      'illustration': 'Mata air alami pegunungan dengan aliran air jernih.',
      'illustration_url': 'public\\images\\1705230733.png',
      'voice_url': 'public\\voice\\1705230733.mp3',
    },
    {
      'id': 62,
      'video_project_id': 12,
      'sequence': 2,
      'title': 'Proses Pemurnian yang Canggih',
      'narration': 'Melalui proses pemurnian tinggi, kami menjaga kebersihan dan kemurnian AquaVita, menghadirkan kualitas terbaik untuk Anda.',
      'illustration': 'Proses filtrasi dan sterilisasi air yang canggih dan modern.',
      'illustration_url': 'public\\images\\1705230744.png',
      'voice_url': 'public\\voice\\1705230742.mp3',
    },
    {
      'id': 63,
      'video_project_id': 12,
      'sequence': 3,
      'title': 'Komitmen Terhadap Keberlanjutan',
      'narration': 'Botol AquaVita yang dapat didaur ulang mencerminkan komitmen kami terhadap keberlanjutan dan lingkungan hidup.',
      'illustration': 'Tangan yang membuang botol AquaVita kosong ke wadah daur ulang.',
      'illustration_url': 'public\\images\\1705230752.png',
      'voice_url': 'public\\voice\\1705230750.mp3',
    },
    {
      'id': 64,
      'video_project_id': 12,
      'sequence': 4,
      'title': 'Keunggulan Mineral Esensial',
      'narration': 'AquaVita mengandung mineral esensial yang optimal, memenuhi kebutuhan harian nutrisi tubuh Anda.',
      'illustration': 'Grafik yang menunjukkan kandungan mineral dalam AquaVita dan manfaatnya bagi kesehatan.',
      'illustration_url': 'public\\images\\1705230760.png',
      'voice_url': 'public\\voice\\1705230758.mp3',
    },
    {
      'id': 65,
      'video_project_id': 12,
      'sequence': 5,
      'title': 'Sensasi Rasa Alami',
      'narration': 'Nikmati sensasi rasa alami air mineral segar dalam setiap tegukan AquaVita.',
      'illustration': 'Close-up tetes air yang jatuh ke dalam gelas, menciptakan gelombang kecil yang berkilauan.',
      'illustration_url': 'public\\images\\1705230768.png',
      'voice_url': 'public\\voice\\1705230766.mp3',
    },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.videoId = this.route.snapshot.params['video_id'];
  }
}
