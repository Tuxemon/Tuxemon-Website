NAME := tuxemon/tuxemon-website
TAG := latest

.PHONY: build image

build: image

image:
	@docker build -t $(NAME):$(TAG) .
