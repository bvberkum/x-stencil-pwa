default:

ReadMe.md: ReadMe.rst
	pandoc $^ -o $@
ReadMe.html: ReadMe.rst
	pandoc $^ -o $@

#		ReadMe.md
TRGT := \
	  ReadMe.html

update-docs: $(TRGT)
