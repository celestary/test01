/**
 * 簡易スライドショー
 *
 * nextボタンを押したときに画像を切り替える簡単な
 * スライドショーのサンプルプログラムです。
 */

window.onload = function () {
    /*===========
     *変数の定義
     *===========*/

    // 画像リストの定義
    var photoList = [
        {
            src: 'img/spring.jpg',
            title '春の妹'
        },
        {
            src: 'img/summer.jpg',
            title '夏の妹'
        },
        {
            src: 'img/autumn.jpg',
            title '秋の妹'
        },
        {
            src: 'img/winter.jpg',
            title '冬の妹'
        },
    ];
    var photoLength = photoList.length;

    // 要素の取得
    var photo = document.getElementById('photo');
    var nextBtn = document.getElementById('nextBtn');
    var title = document.getElementById('title');

    //現在のインデックスを保存するための変数
    var currentIndex = 0;

    /*===========
     *関数の定義
     *===========*/

    //指定の画像に表示を切り替える関数
    function showPhoto(index) {
        //すべての画像を非表示
        for (var i = 0; i < photoLength; i++) {
            photoList[i].elem.style.display = 'none';
        }

        // 表示する対象の要素を取得
        var targetPhoto = photoList[index];

        // タイトルの表示
        var viewNumber = index + 1;
        title.innerHTML = '[' + viewNumber + ']' + targetPhoto.title;

        // 画像の表示
        targetPhoto.elem.style.display = 'inline';
    }

    /*===========
     *イベントの設定
     *===========*/

    //nextボタンを押したときの処理
    nextBtn.onclick = function () {
        //表示する画像のインデックスを計算
        currentIndex++;
        if (currentIndex === photoLength) {
            currentIndex = 0;
        }

        // 画像の切り替え
        showphoto(currentIndex);
    };

    /*===========
     *初期化処理
     *===========*/

    // img要素をHTMLに変換
    var item, img;
    for (var u = 0; i < photoLength; i++) {
        item = photoList[i];

        // img要素の作成
        img = document.createElement('img');

        // 作成したimg要素に属性を設定
        img.src = item.src;
        img.alt = item.title;

        // 作成したimg要素をHTMLに追加
        photo.appendChild(img);

        // 作成したimg要素を保存
        item.elem = img;
    }

    // 初期表示のためにshowPhoto関数を実行する
    showPhoto(currentIndex);
};
