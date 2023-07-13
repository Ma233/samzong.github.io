# Support CMD
BUILD_PATH ?= _site

help:
	@echo
	@echo "Uasge:"
	@echo '    make <command>'
	@echo
	@echo "Command:"
	@echo '    serve        启动服务，默认端口 http://127.0.0.1:3000'
	@echo '    build        构建静态文件'
	@echo '    clean        清理静态文件'
	@echo '    help         显示帮助信息'
	@echo
	@echo "Version: 1.0.0"
	@echo

serve:
	yarn start

build:
	yarn build

clean:
	yarn clean

push:
	git add .
	git commit -s -m "add new post"
	git push origin main

.PHONY: serve build clean help