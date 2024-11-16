$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/

  $(".toggle_btn").on("click", function () {
    ($("#header").toggleClass("open"));
  });
  $("#mask").on("click", function () {
    $("#header").toggleClass("open");
  });
  $("#nav a").on("click", function () {
    $("#header").toggleClass("open");

  });
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


$(".slide-items").slick({
  arrows: false,
  centerMode: true,
  autoplay: true, // 自動再生
  autoplaySpeed: 2000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
  infinite: true, // 無限スライド
  slidesToShow: 3, // 表示するスライド枚数
  slidesToScroll: 1,// スライドする数

  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "50px",
        slidesToShow: 2,
      },
    },
  ],
});



let pagetop = $("#to-top");
// 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
pagetop.hide();
// hideとはスムーズに非表示(ページトップにスムーズに移動)
// スクロールイベント（スクロールされた際に実行）
$(window).scroll(function () {
  // スクロール位置が700pxを超えた場合
  if ($(window).scrollTop() > 500) {
    // if ($(this).scrollTop() > $(".mainvisual").height()/2 ) {
    // トップに戻るボタンを表示する
    pagetop.fadeIn();
    // スクロール位置が700px未満の場合
  } else {
    // トップに戻るボタンを非表示にする
    pagetop.fadeOut();
  }
  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);
    //   // イベントが親要素へ伝播しないための記述
    //   // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    //   return false;
  });
});

// チェックボックス
function toggleCheckboxes(checkedId, uncheckedId) {
  const checkedBox = document.getElementById(checkedId);
  const uncheckedBox = document.getElementById(uncheckedId);

  if (checkedBox.checked) {
    uncheckedBox.checked = false;
  }
}





