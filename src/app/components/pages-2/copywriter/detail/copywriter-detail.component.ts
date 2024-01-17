import { Component } from '@angular/core';

@Component({
  selector: 'app-copywriter-detail',
  templateUrl: './copywriter-detail.component.html',
  styleUrl: './copywriter-detail.component.scss'
})
export class CopywriterDetailComponent {

  result = 'Perkenalkan, AquaVita, air mineral alami yang sempurna untuk gaya hidup sehat Anda. AquaVita berasal dari sumber mata air pegunungan yang murni dan segar, kemudian melewati proses pemurnian yang ketat untuk memastikan kualitas terbaik. Dengan kandungan mineral alami yang optimal, AquaVita membantu menjaga tubuh Anda tetap terhidrasi dan sehat.\\n\\nAquaVita dikemas dalam botol yang ramah lingkungan dan mudah dibawa, sehingga Anda dapat menikmati kesegaran air mineral alami kapan saja dan di mana saja. AquaVita adalah pilihan yang tepat untuk Anda yang peduli dengan kesehatan dan lingkungan.\\n\\nBerikut adalah beberapa keunggulan AquaVita:\\n\\n* Sumber Air Alamiah: AquaVita berasal dari mata air alamiah yang kaya mineral, memberikan keaslian dan kesegaran yang unik.\\n* Proses Pemurnian Tinggi: Menggunakan teknologi canggih untuk menjaga kebersihan dan kemurnian air, memastikan kualitas terbaik untuk konsumen.\\n* Kemasan Ramah Lingkungan: Botol yang dapat didaur ulang dan ramah lingkungan, mendukung komitmen kami terhadap keberlanjutan.\\n* Kandungan Mineral Optimal: Mengandung sejumlah mineral esensial untuk keseimbangan tubuh, memenuhi kebutuhan harian nutrisi Anda.\\n* Rasa Alami: Tidak ada tambahan bahan kimia atau perasa buatan, AquaVita memberikan sensasi rasa alami air mineral segar.\\n* Desain Modern: Kemasan yang elegan dan praktis, cocok untuk gaya hidup aktif dan sibuk\\n* Dukungan Kesehatan: Dengan konsumsi rutin, AquaVita membantu menjaga hidrasi optimal, mendukung fungsi organ, dan meningkatkan kesehatan secara keseluruhan.\\n\\nJadi, tunggu apa lagi? Beralihlah ke AquaVita sekarang dan rasakan kesegaran air mineral alami yang murni dan sehat.'

  saveComment() {
    this.result = 'Comment saved'
  }
}
