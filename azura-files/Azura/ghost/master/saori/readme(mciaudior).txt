mciaudior.dll

■概要
　MCI を使って MID/WAV/MP3/WMA/AU ファイルを演奏する SAORI プラグインです。
　MIY氏作の mciaudio.dll と互換性があります（完全互換ではありません）。

　おまけ機能として Ogg ファイルの再生にも対応しています。

■使いかた

　・曲ロード
　Argument0 load
　Argument1 ファイル名
　　ファイルはmciaudior.dllからの相対パス指定、もしくは絶対パス指定。

　・演奏開始
　Argument0 play
　　演奏終了後に再度頭出しして演奏する場合は一旦 stop を実行すること。

　・ループ演奏開始
　Argument0 loop
　　演奏終了後に再度頭出しして演奏する場合は一旦 stop を実行すること。

　・演奏停止
　Argument0 stop

　----

　演奏中に play/loop を送ると一時停止します。再度 play/loop を送ると演奏を再開します。
　play で演奏を始めて loop で再開すると以降はループ演奏となります。逆のパターンも同様です。

　ただし、Ogg ファイルでは一時停止はできません。


■イベント通知

演奏終了時（ループ演奏時には 1 ループ終了して曲頭に戻った時）に以下のイベントが通知されます。

　・演奏終了
	OnMAAPlayFinish
		Reference0 ファイル名
		Reference1 この曲の演奏に要した時間、単位秒

　・1 ループ終了して曲頭に戻った
	OnMAAPlayLoop
		Reference0 ファイル名
		Reference1 1 ループ演奏に要した時間、単位秒


■設定ファイル

mciaudior.dllと同階層にmciaudior.txtというファイルを配置すると、mciaudior.dllはload時に
このファイルに記述された設定を読み込んで適用します。
mciaudior.txtは無くてもかまいません。その場合はデフォルトの設定で動作します。

設定項目はいまのところ ogg.mode のみです。

ogg.mode,<playsound|mci>
Ogg Vorbisの再生モードを設定します。
ogg.mode,playsoundとすると、mciaudiorはデータをメモリ上に展開し、これをAPI PlaySoundで再生します。
デフォルトの動作です。
長所はファイルアクセス時間が最短であること。短所は他にPlaySoundを使用しているSAORI等が存在して
いると再生が行なわれない場合があること。
ogg.mode,mciとすると、mciaudiorはOggをwavファイルに変換して仮ファイルに吐き出し、これをMCIで再生
します。長所はPlaySoundの衝突が無いことと、Oggでも一時停止機能が使えること。短所は再生開始時の
ファイルアクセスが多いこと。
なお仮ファイルは適宜自動的に削除されますのでディスク上には残りません。

以上の説明が良くわからないという方はあまり気にしなくていいです。


■mciaudio.dll との差分

　差分と言うより機能追加した部分です。
　けっこうあります。

　(1) load ファイル相対パス指定時の基準位置が違う
　　　mciaudio は \ghost\master
　　　mciaucior は mciaudior.dll の位置
　　　従って、mciaudior を \ghost\master に配置した場合、両者に差分はありません。

　(2) load ファイルの絶対パス指定が可能

　(3) WMA/AU、および Ogg の演奏も可能

　(4) ループ演奏が可能

　(5) 演奏終了後に同じファイルを再演奏する際、stop を入れずに即 play できる

　(6) 演奏終了／ 1 ループ終了で DirectSSTP イベント通知がある


■version information
　20030215 - construction 0
　20030224 - construction 1
	・拡張子を見てデバイスタイプを明示的に指定
	　MID(Sequencer)/WAV(wavaudio)/MP3(MPEGAudio)/WMA(MPEGVideo2)/AU(MPEGVideo)
	　au使うひとはあまり居ないでしょうけど一応。
　20030301 - construction 2
	・ループ演奏
	・拡張子フィルタリング（MID/WAV/MP3/WMA/AU）
	　前版まではとにかくコマンドを送るとこまでは実行していた。
　20030314 - construction 3
	・unload 時に書き込み違反が発生する可能性がある問題を修正
　20030418 - construction 4
	・未公開
　20030420 - construction 5
	・動作安定性向上
　20030427 - construction 7
	・play 終了後に再度頭出しして演奏する場合、stopを略してすぐ play できる
	・演奏終了／ 1 ループ終了で DirectSSTP イベント通知
　20030825 - construction 8
	・stop を指示しても演奏が停止しない場合がある問題を修正
　20030826 - construction 10
	・OnMAAPlayFinish / OnMAAPlayLoop の Reference1 が常に 0 となる問題を修正
	・Ogg Vorbis 再生
	　おまけ。load 時に WAV へ変換して処理しています。したがって、変換処理に
	　若干時間がかかります。メモリもかなり必要です。
	　また、再生の一時停止はできません。
　20030830 - construction 14
	・処理速度向上
　20030904 - construction 19
	・DirectSSTP イベントが通知されない場合がある問題を修正
　20030906 - construction 20
	・DirectSSTP イベントが最初の一度しか通知されない問題を修正
　20031209 - construction 21
	・Ogg再生モード設定機能追加
　20031221 - construction 22
	・Oggをogg.mode,mciモードで再生するとメモリを食いつぶす問題を修正
　20050524 - construction 24
	・Ogg Vorbisで左右パンニングが逆だった不具合を修正


■Ogg Vorbis関連リンク
以下のサイトから情報を得ました。感謝します。

Vorbis.com
	http://www.vorbis.com/
無題
	http://f16.aaacafe.ne.jp/~mtweb/

