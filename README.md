# Google Analytics フィードバックウィジェット

## Google Analyticsを使ってフィードバックを受け取る

![フィードバックダッシュボード](https://cloud.githubusercontent.com/assets/141241/6202018/df394a10-b4ce-11e4-9b75-047aaf44c511.png)

登録や制限、月額料金を気にせず、無料で無制限にフィードバックを収集できるウィジェットです。

* 無料で無制限のフィードバック
* Google Analyticsデータと統合
* 1KBのサイズ（圧縮済み）で依存関係なし
* 簡単にインストール
* モバイル対応
* 毎日のメール + 高度なレポート
* 完全なカスタマイズ + 多言語対応

必要なのはGoogle Analyticsを使うことだけで、jQueryや他の依存関係は必要ありません。

このプラグインは完全にカスタマイズ可能で、複数の言語をサポートしており、デスクトップ、モバイル、タブレットデバイスで動作します。サイズはわずか1KBです。

ライブデモはこちらでご覧いただけます: <a href="http://trendliker.com/">trendliker.com</a>

## 使い方

プラグインはページの右下に固定ボタンを配置します:

![フィードバックボタン](https://cloud.githubusercontent.com/assets/141241/6185187/ce03b870-b36b-11e4-86a7-a6ef880f95ec.png)

クリックすると、フィードバックフォームが表示されます:

![フィードバックダイアログ](https://cloud.githubusercontent.com/assets/141241/6185199/f122f686-b36b-11e4-8858-fb8869824b82.png)

ユーザーはフィードバックの種類を選択し、テキストボックスに記入できます。<em>送信</em>をクリックすると、感謝のメッセージが表示され、ダイアログが消えます。

すべてのメッセージはGoogle Analyticsの「フィードバック」イベントとして保存されます。

## フィードバックダッシュボード

フィードバックウィジェットダッシュボードは、ユーザーのフィードバックをテーブルで表示する既製のダッシュボードです（これらはユーザーごとのセッション数でソートされているため、アクティブなユーザーが最初に表示されます）。右側の列には、円グラフや受け取ったフィードバックのタイムラインなどがあります。

<a href="https://www.google.com/analytics/web/template?uid=DcXKkhvbT1GSHHcOrdkGoA">ここをクリックしてこのダッシュボードを入手</a>して、後でさらにカスタマイズできます。

![フィードバックダッシュボード](https://cloud.githubusercontent.com/assets/141241/6202018/df394a10-b4ce-11e4-9b75-047aaf44c511.png)

## 毎日メールで結果を受け取る

ダッシュボードの上部に<em>メール</em>ボタンがあります。これをクリックしてダッシュボードをメールで受け取ります。日次、週次、月次レポートをカスタマイズして、自分やチームに送信できます。

![毎日のメール](https://cloud.githubusercontent.com/assets/141241/6202046/85f10072-b4d0-11e4-9bd6-d5f9c7c7f677.png)

### 小規模サイト向けの適時アラート

毎日メールを受け取りたくない場合は、Google Analyticsには<em>インテリジェンスイベント</em>の<em>アラート</em>機能があり、特定の事象が発生したときにメールを受け取ることができます。以下の例では、フィードバックが提出されたときに毎日メールを受け取ります。

![インテリジェンスイベント](https://cloud.githubusercontent.com/assets/141241/6192851/649201c6-b3b6-11e4-9b0a-b15783c18b01.png)

10人以上がフィードバックを提出したときにのみメールを受け取る、フィルタリングして「問題」だけを受け取る、再訪問者からのフィードバックだけを受け取る、米国からのフィードバックだけを受け取る、「エラー」という単語を含むフィードバックだけを受け取る、Firefoxを使用しているユーザーからのフィードバックだけを受け取るなどの設定ができます。

### カスタマイズと詳細

フィードバックの提出はGoogle Analyticsのイベントとして保存されます（<em>レポート</em> > <em>行動</em> > <em>イベント</em>）。

- **イベントカテゴリー**: <code>Feedback</code>
- **イベントアクション**: <code>Problem</code>, <code>Suggestion</code>, <code>Compliment</code> または <code>Other</code>
- **イベントラベル**: ユーザーのフィードバック
- **イベント値**: <code>1</code>

#### イベントアクション

![Google Analytics イベントアクション](https://cloud.githubusercontent.com/assets/141241/6185994/6abf609e-b374-11e4-8e4c-7501001007e5.png)

#### イベントラベル

![Google Analytics イベントラベル](https://cloud.githubusercontent.com/assets/141241/6186019/b39a9fae-b374-11e4-8c98-a1c0ebb52949.png)

## ウェブサイトに設定する

1. Google Analyticsコードの後に<code>feedback.js</code>ファイルを読み込みます。
2. パラメーターでフィードバックウィジェットを初期化します。
3. 完了 :)

以下はコピー＆ペーストできる例です：

<pre>&lt;script src="feedback.js"&gt;&lt;/script&gt;
&lt;script&gt;
		Namespace.gaf.init( {
		'open': 'Feedback',
		'title': 'We would love to hear your thoughts!',
		'option1': 'Problem',
		'option2': 'Suggestion',
		'option3': 'Compliment',
		'option4': 'Other',
		'placeholder': 'Please enter your feedback here&hellip;',
		'send': 'Send',
		'thankyou': 'Thank you for your feedback!'
	} );
&lt;/script&gt;</pre>

### 高度な手動トリガー

サイト内の他のスクリプトからフィードバックフォームをロードし、フィードバックウィジェットを制御できます。例えば、フィードバックダイアログウィンドウを表示するには、以下を実行します：

<pre>Namespace.gaf.loadDialog();</pre>

## 毎月のレポートなど...

これで、無料のフィードバックウェブサイトツールを手に入れました。さらに素晴らしいのは、既にGoogle Analyticsの他のトラフィックデータと統合されていることです。ダッシュボードに追加したり、バグ報告の割合、訪問数に対するユーザー満足度などのレポートを作成したりすることができます。クリエイティブに活用してください！

<hr>

<a href="http://xaviesteve.com">Xavi</a>が構築しました。問題の報告やプルリクエスト、ダッシュボードの改善に関する提案やアイデアを送ってください。
