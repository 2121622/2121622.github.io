console.log('chart-test.jsを読み込みました。')

// 本家サイトからコピーしてきたサンプル

// ラベル
const data2 = {
  labels: [
        'ヨーロッパ',
        'アジア・オセアニア',
        '南米',
        '北中米カリブ',
        'アフリカ'
        
      ],
      datasets: [{
        label: '参加国の大陸別分布',
        data: [13, 6, 4, 4, 5],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(33, 205, 86)',
          'rgb(183, 85, 47)',
        ],
        hoverOffset: 5
      }]
    };
  
    const config2 = {
      type: 'doughnut',
      data: data2,
    };
  
    const myChart2 = new Chart(
      // document.getElementById('myChart'),
      // 上の処理をjQueryで書くと
      $('#myChart2'),
      config2
    );