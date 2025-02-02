# broardlistening-report

ブロードリスニングのレポートを表示します

## Install
```
npm install
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
- `aboutMessage`: レポートの概要
- `reporterName`: レポート作成者名
- `reporterImage`: レポート作成者画像
