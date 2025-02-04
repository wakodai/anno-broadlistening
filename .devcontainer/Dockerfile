# Python 3.10 をベースにしたコンテナ
# FROM mcr.microsoft.com/devcontainers/base:ubuntu
FROM nvidia/cuda:11.8.0-devel-ubuntu22.04

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8 LC_CTYPE=C.UTF-8

# 環境変数を設定し、すべてのパッケージインストールを非対話モードにする
ENV DEBIAN_FRONTEND=noninteractive \
    TZ=Asia/Tokyo

RUN set -x \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
    && apt-get clean && rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*

RUN set -x \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        tzdata \
    && apt-get clean && rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/* \
    && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
    && echo 'Asia/Tokyo' >/etc/timezone

# create vscode user
RUN set -x \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        sudo \
    && apt-get clean && rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/* \
    && echo "vscode ALL=(ALL) NOPASSWD:ALL" >>/etc/sudoers.d/ALL \
    && groupadd \
        --gid 5000 \
        vscode \
    && useradd \
        --uid 5000 \
        --gid 5000 \
        --home-dir /home/vscode \
        --create-home \
        --shell /bin/bash \
        vscode

# vscode extensions cache
# https://code.visualstudio.com/docs/remote/containers-advanced#_avoiding-extension-reinstalls-on-container-rebuild
RUN set -x \
    && mkdir -p /home/vscode/.vscode-server/extensions /home/vscode/.vscode-server-insiders \
    && chown -R vscode:vscode /home/vscode/.vscode-server /home/vscode/.vscode-server-insiders \
    && ln -s /home/vscode/.vscode-server/extensions /home/vscode/.vscode-server-insiders/extensions

# 必要なツールをインストール
RUN apt-get update && apt-get install -y \
    bash-completion \
    git \
    git-lfs \
    curl \
    python3.10 \
    python3.10-dev \
    python3-pip \
    htop \
    # locales \
    # tzdata \
    && git lfs install \
    && rm -rf /var/lib/apt/lists/*

# # ロケールを日本に設定
# RUN locale-gen ja_JP.UTF-8 && \
#     update-locale LANG=ja_JP.UTF-8 && \
#     ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
#     echo "Asia/Tokyo" > /etc/timezone && \
#     dpkg-reconfigure --frontend noninteractive tzdata

# ENV LANG=ja_JP.UTF-8
# ENV LANGUAGE=ja_JP:ja
# ENV LC_ALL=ja_JP.UTF-8

# Python3.10 をデフォルトの `python` に設定
RUN ln -sf /usr/bin/python3.10 /usr/bin/python && ln -sf /usr/bin/pip3 /usr/bin/pip

# 最新の Node.js (LTS) をインストール
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest \
    && rm -rf /var/lib/apt/lists/*

USER vscode
    
ENV PATH="$HOME/.local/bin:$PATH"

RUN echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc

# シェルスクリプトを配置
COPY install.sh /usr/local/bin/install.sh
RUN sudo chmod +x /usr/local/bin/install.sh
    
