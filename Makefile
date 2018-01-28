default:

ReadMe.md: ReadMe.rst
	pandoc $^ -o $@
ReadMe.html: ReadMe.rst
	pandoc $^ -o $@

update-docs: ReadMe.md ReadMe.html
