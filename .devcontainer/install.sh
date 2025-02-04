#!/bin/bash
set -e

# 依存パッケージをインストール
pip install --upgrade pip
pip install -r /workspaces/anno-broadlistening/scatter/requirements.txt

# NLTK ストップワードデータをダウンロード
python -c "import nltk; nltk.download('stopwords')"

# Next.js の依存パッケージをインストール
cd /workspaces/anno-broadlistening/scatter/next-app
npm install

sudo npm install -g http-server

# 終了メッセージ
echo "Devcontainer setup completed!"
