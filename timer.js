var time = 180; //設定時間
var min = 0;
var sec = 0;
var interval_id; //インターバルidの設定
var start_flag = false; //スタートボタンを制御するフラグ
//時間を表示するtimer関数を設定
function timer() {
  min = (('00') + Math.floor(time / 60)).slice(-2);
  sec = (('00') + time % 60).slice(-2);
  $('#number').html(min + ':' + sec);
}
//ページ表示時にタイマーの時間を表示
timer();

//スタート処理
$('#start').on('click', function count_start() {
  if (start_flag === false) {
    interval_id = setInterval(count_down, 1000);
    start_flag = true;
  }
});

//カウントダウン処理
function count_down() {
  if (time > 1) {
    time--;
    timer();
  } else if (time === 1) {
    $('#number').html('TIME UP!');
    start_flag = false;
  }
}

//ストップ処理
$('#stop').on('click', function count_stop() {
  if (start_flag === true) {
    clearInterval(interval_id);
    start_flag = false;
  }
});

//リセット処理
$('#reset').on('click', function count_reset() {
  if (start_flag === false) {
    clearInterval(interval_id);
    time = 180;
    timer();
  }
});
