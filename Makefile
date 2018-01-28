default:

ReadMe.md: ReadMe.rst
	pandoc $^ -o $@
ReadMe.html: ReadMe.rst
	pandoc $^ -o $@

TRGT := \
		ReadMe.md \
	  ReadMe.html

.PHONY: update-docs all

update-docs: $(TRGT)

all: update-docs
