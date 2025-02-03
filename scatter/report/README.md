# broardlistening-report

ブロードリスニングのレポートを表示します

## Install
```
npm install
npm run build
```

## Develop
```
REPORT=report_name npm run dev
```
起動中は修正内容が即時反映されます

## Build
```
REPORT=report_name npm run build
```
ビルド実行時の出力先は `../pipeline/outputs/{{report_name}}/report` です

## Start
```
REPORT=xxxxx npm start
```
ビルドされた `index.html` を確認できます

## Note
- 環境変数にレポート名を指定する必要があります (`process.env.REPORT`)
- レポート名の一覧は `../pipeline/outputs/{{report_name}}` を確認してください

## Environment variables
- `REPORT`: レポート名 (*必須)

## Meta

レポート作成者の情報を表示するには `../pipeline/outputs/{{report_name}}` に以下のファイルを配置してください  
meta.json は必須ではなく、見つからない場合はレポート作成者情報を含めずにビルドされます

- **meta.json**
  - reporterName: レポート作成者名(*必須)
  - aboutMessage: レポート作成者についての説明(*必須)
  - aboutLink: レポート作成者のリンク
  - privacyLink: プライバシーポリシーのリンク
  - termsLink: 利用規約のリンク
- **reporter.png**
  - レポート作成者のロゴ画像(*必須)

```meta.json
// meta.json
{
  "reporterName": "東京都架空区",
  "aboutMessage": "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。",
  "aboutLink": "https://example.com/",
  "privacyLink": "https://example.com/privacy",
  "termsLink": "https://example.com/terms"
}
```
